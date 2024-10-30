import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { toFloatTaxRate } from '@util/num'
import { handleError, sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
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

    // get current epoch (auction)
    const { name, startedAt, epochInterval: interval } = board
    const epoch = await operator.read.getEpochFromBlock([
      startedAt,
      currBlock,
      interval,
    ])
    const [epochRange, bidCount] = await Promise.all([
      getEpochRange(alchemy, startedAt, epoch, interval),
      registry.read.getBidCount([id, epoch]),
    ])

    // get cuurent highest bid
    const highestBidder = await registry.read.highestBidder([id, epoch])
    const highestBid = await operator.read.getBid([id, epoch, highestBidder])

    // get current running bids (on air)
    let runningBid = { contentURI: '' }
    if (epoch >= 2n) {
      const runningEpoch = epoch - 2n
      const runningHighestBidder = await registry.read.highestBidder([
        id,
        runningEpoch,
      ])
      runningBid = await operator.read.getBid([
        id,
        runningEpoch,
        runningHighestBidder,
      ])
    }

    // get current user's bid if user connected wallet
    const address = url.searchParams.get('address')
    const currBid = address
      ? await operator.read.getBid([id, epoch, address as `0x${string}`])
      : null

    return json({
      state: STATE.successful,
      board: {
        name: board.name,
        taxRate: toFloatTaxRate(Number(board.taxRate || 0)),
        imageURI: runningBid?.contentURI || board.imageURI,
        location: board.location,
      },
      epoch: Number(epoch),
      epochRange,
      bidderCount: Number(bidCount),
      highestBid: {
        bidder: highestBidder,
        price: Number(highestBid?.price || 0).toFixed(0),
      },
      currBid: currBid
        ? {
            price: Number(currBid.price || 0).toFixed(0),
            placedAt: Number(currBid.placedAt),
          }
        : null,
    })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
