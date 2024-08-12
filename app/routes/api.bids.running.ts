import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import { range } from 'lodash-es'

import { ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
import { getEpochRange, getShiftedEpochRange } from '@util/web3'

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

    const [lastTokenId, currBlock] = await Promise.all([
      registry.read.lastTokenId(),
      client.getBlockNumber(),
    ])

    const runningBids = []
    const upcomingBids = []
    const ids = range(1, Number(lastTokenId) + 1)
    for (const id of ids) {
      // feature flag
      if (Number(tokenIdShowCase || 0) !== id) {
        continue
      }

      const board = await operator.read.getBoard([BigInt(id)])
      if (board.startedAt == 0n) {
        continue
      }

      const { name, startedAt, epochInterval: interval } = board
      const epoch = await operator.read.getEpochFromBlock([
        startedAt,
        currBlock,
        interval,
      ])

      // get running
      const runningEpoch = epoch >= 2n ? epoch - 2n : 0n
      const upcomingEpoch = epoch >= 1n ? epoch - 1n : 0n
      const [
        runningBid,
        runningDisplayRange,
        upcomingBid,
        upcomingDisplayRange,
      ] = await Promise.all([
        operator.read.getBid([
          BigInt(id),
          runningEpoch,
          address as `0x${string}`,
        ]),
        getEpochRange(alchemy, startedAt, epoch, interval),
        operator.read.getBid([
          BigInt(id),
          upcomingEpoch,
          address as `0x${string}`,
        ]),
        getShiftedEpochRange(alchemy, startedAt, epoch, interval, 1),
      ])

      if (epoch >= 2n && runningBid.isWon === true) {
        runningBids.push({
          board: { id, name },
          epoch: Number(runningEpoch),
          displayRange: runningDisplayRange,
          bid: {
            price: Number(runningBid.price).toFixed(0),
            placedAt: Number(runningBid.placedAt).toFixed(0),
          },
        })
      }

      if (upcomingBid.isWon === true) {
        upcomingBids.push({
          board: { id, name },
          epoch: Number(upcomingEpoch),
          displayRange: upcomingDisplayRange,
          bid: {
            price: Number(upcomingBid.price).toFixed(0),
            placedAt: Number(upcomingBid.placedAt).toFixed(0),
          },
        })
      }
    }

    return json({ state: STATE.successful, runningBids, upcomingBids })
  } catch (error) {
    const errorMessage = (error as any)?.message || 'unknown'
    console.log(errorMessage)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
