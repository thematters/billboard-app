import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import { range } from 'lodash-es'

import { ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
import { getEpochRange } from '@util/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url)
    const address = url.searchParams.get('address')
    if (!address) {
      return sendError(ERROR.ADDRESS_INVALID)
    }

    // collect envs
    const { chain, addressOperator, addressRegistry, tokenIdShowCase } =
      readEnvs()
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

    // get basics
    const [lastTokenId, currBlock] = await Promise.all([
      registry.read.lastTokenId(),
      client.getBlockNumber(),
    ])

    // gather each token's data and it's ongoing bids
    const allBids = []
    const lastId = Number(lastTokenId)
    const tokenIds = range(1, lastId + 1)
    for (const tokenId of tokenIds) {
      // feature flag
      if (Number(tokenIdShowCase || 0) !== tokenId) {
        continue
      }

      const id = BigInt(tokenId)
      const board = await operator.read.getBoard([id])
      if (board.startedAt == 0n) {
        continue
      }

      const bidderBidCount = await registry.read.getBidderBidCount([
        id,
        address as `0x${string}`,
      ])
      if (bidderBidCount == 0n) {
        // skip if the user has no bids
        continue
      }

      const { name, startedAt, epochInterval: interval } = board
      const currEpoch = await operator.read.getEpochFromBlock([
        startedAt,
        currBlock,
        interval,
      ])

      // gather all non-refundable bids
      const size = 1
      const pages = range(Math.ceil(Number(bidderBidCount) / size))
      for (const page of pages) {
        const offset = page * size
        const [, , , bids, epochs] = await operator.read.getBidderBids([
          id,
          address as `0x${string}`,
          BigInt(size),
          BigInt(offset),
        ])

        for (const [index, bid] of bids.entries()) {
          const bidEpoch = epochs[index]
          if (bidEpoch >= currEpoch || bid.isWon === true) {
            // skip if the auction is running, and skip if the bid won
            continue
          }
          if (bid.isWithdrawn === true) {
            // skip the rest if the user had withdrawn before
            break
          }

          const [highestBidder, bidEpochRange] = await Promise.all([
            registry.read.highestBidder([id, bidEpoch]),
            getEpochRange(alchemy, startedAt, bidEpoch, interval),
          ])
          if (address === highestBidder) {
            // skip if bid is the highet one
            continue
          }

          const highestBid = await registry.read.getBid([
            id,
            bidEpoch,
            highestBidder,
          ])
          if (highestBid.isWon === false) {
            // skip if bid is not cleared
            continue
          }

          allBids.push({
            board: { id: tokenId, name },
            epoch: Number(bidEpoch),
            epochRange: bidEpochRange,
            bid: {
              price: Number(bid.price).toFixed(0),
              tax: Number(bid.tax).toFixed(0),
            },
          })
        }
      }
    }

    return json({ state: STATE.successful, bids: allBids })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
