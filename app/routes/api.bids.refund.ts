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
    const bids = []
    const lastId = Number(lastTokenId)
    const ids = range(1, lastId + 1)
    for (const id of ids) {
      // feature flag
      if (Number(tokenIdShowCase || 0) !== id) {
        continue
      }

      const board = await operator.read.getBoard([BigInt(id)])
      if (board.startedAt == 0n) {
        continue
      }

      const bidCount = await registry.read.getBidderBidCount([
        BigInt(id),
        address as `0x${string}`,
      ])
      if (bidCount == 0n) {
        continue
      }

      const { name, startedAt, epochInterval: interval } = board
      const epoch = await operator.read.getEpochFromBlock([
        startedAt,
        currBlock,
        interval,
      ])

      // gather old bids
      const epochs = range(Number(epoch) - 1, -1, -1)
      for (const epochId of epochs) {
        if (bids.length === Number(bidCount)) {
          break
        }

        const count = await registry.read.getBidCount([
          BigInt(id),
          BigInt(epochId),
        ])
        if (count == 0n) {
          continue
        }

        const [bid, epochRange] = await Promise.all([
          operator.read.getBid([
            BigInt(id),
            BigInt(epochId),
            address as `0x${string}`,
          ]),
          getEpochRange(alchemy, startedAt, BigInt(epochId), interval),
        ])
        if (bid.placedAt == 0n) {
          continue
        }
        if (bid.isWithdrawn === true) {
          break
        }
        if (bid.isWon === true) {
          continue
        }
        bids.push({
          board: { id, name },
          epoch: Number(epochId),
          epochRange,
          bid: {
            price: Number(bid.price).toFixed(0),
            placedAt: Number(bid.placedAt).toFixed(0),
            tax: Number(bid.tax).toFixed(0),
          },
        })
      }
    }

    return json({ state: STATE.successful, bids })
  } catch (error) {
    const errorMessage = handleError(error)
    console.log(errorMessage)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
