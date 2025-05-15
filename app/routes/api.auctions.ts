import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import { takeRight } from 'lodash-es'

import { ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'
import {
  getBidWonEvents,
  initClient,
  initOperator,
  initRegistry,
} from '@util/viem'
import { getEpochRange } from '@util/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url)
    const tokenId = url.searchParams.get('id')
    if (!tokenId) {
      return sendError(ERROR.BOARD_ID_INVALID)
    }

    // collect envs
    const { chain, addressOperator, addressRegistry } = readEnvs()
    const { urlAlchemy } = readSecretEnvs()
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

    // get the board and current block
    const [board, currBlock] = await Promise.all([
      operator.read.getBoard([id]),
      client.getBlockNumber(),
    ])
    const { name, startedAt, epochInterval: interval } = board

    // get the lastest 10 auction
    const events = takeRight(
      await getBidWonEvents(client, addressRegistry, id, currBlock),
      10
    )

    const auctions = []
    for (const event of events) {
      const { tokenId, epoch, bidder } = event.args
      if (typeof tokenId !== 'bigint' || typeof epoch !== 'bigint' || !bidder) {
        continue
      }

      const [bid, epochRange] = await Promise.all([
        operator.read.getBid([tokenId, epoch, bidder]),
        getEpochRange(alchemy, startedAt, epoch, interval),
      ])

      if (bid.isWon === false) {
        continue
      }

      auctions.push({
        epoch: Number(epoch),
        epochRange,
        bid: {
          bidder,
          price: Number(bid.price).toFixed(0),
          placedAt: Number(bid.placedAt).toFixed(0),
        },
        txHash: event.transactionHash,
      })
    }
    return json({ state: STATE.successful, auctions })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
