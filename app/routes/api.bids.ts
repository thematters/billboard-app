import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import groupBy from 'lodash-es/groupBy.js'
import orderBy from 'lodash-es/orderBy.js'

import { BLOCK_TIME, ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'
import { genUTC8Date } from '@util/time'
import {
  getBidUpdatedEvents,
  initClient,
  initOperator,
  initRegistry,
} from '@util/viem'
import { genEpochRange } from '@util/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url)
    const tokenId = url.searchParams.get('id')
    if (!tokenId) {
      return sendError(ERROR.BOARD_ID_INVALID)
    }

    // collect envs
    const { env, chain, addressOperator, addressRegistry } = readEnvs()
    const { keyAlchemy, urlAlchemy } = readSecretEnvs()
    if (!chain) {
      return sendError(ERROR.CHAIN_NOT_SET)
    }
    if (!addressOperator || !addressRegistry) {
      return sendError(ERROR.CONTRACT_NOT_SET)
    }
    if (!urlAlchemy) {
      return sendError(ERROR.ALCHEMY_NOT_SET)
    }

    // init contracts
    const client = initClient(chain, urlAlchemy)
    const operator = initOperator(addressOperator, client)
    const registry = initRegistry(addressRegistry, client)
    const id = BigInt(tokenId)

    // get board
    const [board, currBlock] = await Promise.all([
      operator.read.getBoard([id]),
      client.getBlockNumber(),
    ])
    if (!board) {
      return sendError(ERROR.BOARD_NOT_FOUND)
    }
    if (!currBlock) {
      return sendError(ERROR.CURR_BLOCK_NUMBER_NOT_FOUND)
    }

    // get epoch (auction)
    const epoch = await operator.read.getEpochFromBlock([
      board.startedAt,
      currBlock,
      board.epochInterval,
    ])

    // get epoch start and end
    const startAtBlock = board.startedAt + epoch * board.epochInterval
    const startAtTime = await alchemy.core.getBlock(Number(startAtBlock))
    const epochRange = genEpochRange(
      startAtTime.timestamp,
      Number(board.epochInterval)
    )

    // get current epoch all bids
    const total = Number(await registry.read.getBidCount([id, epoch]))

    if (total === 0) {
      return json({
        state: STATE.successful,
        epoch: Number(epoch),
        epochRange,
        bids: [],
      })
    }

    const bids = []
    // gather all bid updated events
    const allEvents = (
      (await getBidUpdatedEvents(
        client,
        addressRegistry,
        id,
        epoch,
        currBlock
      )) || []
    ).map((d) => ({
      ...d.args,
      blockNumber: d.blockNumber,
      txHash: d.transactionHash || '',
    }))
    const grouppedEvents = groupBy(allEvents, 'price')
    const filteredEvents = Object.entries(grouppedEvents).map(
      ([price, events]) => {
        return orderBy(events, ['blockNumber'], ['asc'])[0]
      }
    )
    for (const event of filteredEvents) {
      const updatedAtTime = await alchemy.core.getBlock(
        Number(event.blockNumber)
      )
      const updatedAt = genUTC8Date(updatedAtTime.timestamp * 1000)
      bids.push({
        bidder: event.bidder,
        price: Number(event.price).toFixed(0),
        updatedAt,
        updatedAtTime: updatedAtTime.timestamp,
        txHash: event.txHash,
      })
    }

    return json({
      state: STATE.successful,
      epoch: Number(epoch),
      epochRange,
      bids,
      bidderCount: total,
    })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
