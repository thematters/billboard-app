import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import range from 'lodash-es/range'

import { DATA_STATE } from '@constants'
import { getAlchemyContext } from '@server/alchemy.server'
import { getAddress, sendError } from '@server/helper.server'
import { getViemContext } from '@server/viem.server'
import { getEpochRange, getShiftedEpochRange } from '@utils/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const address = getAddress(request)

    // get context
    const { alchemy } = getAlchemyContext()
    const { operator, registry } = getViemContext()

    const [lastTokenId] = await Promise.all([registry.read.lastTokenId()])

    const runningBids = []
    const upcomingBids = []
    const ids = range(1, Number(lastTokenId) + 1)

    for (const boardId of ids) {
      const id = BigInt(boardId)
      const [board, epoch] = await Promise.all([
        operator.read.getBoard([id]),
        operator.read.getLatestEpoch([id]),
      ])

      if (board.startedAt == 0n) {
        continue
      }

      const { name, startedAt, epochInterval: interval } = board
      const runningEpoch = epoch >= 2n ? epoch - 2n : 0n
      const upcomingEpoch = epoch >= 1n ? epoch - 1n : 0n
      const [
        runningBid,
        runningDisplayRange,
        upcomingBid,
        upcomingDisplayRange,
      ] = await Promise.all([
        operator.read.getBid([id, runningEpoch, address]),
        getEpochRange(alchemy, startedAt, epoch, interval),
        operator.read.getBid([id, upcomingEpoch, address]),
        getShiftedEpochRange(alchemy, startedAt, epoch, interval, 1),
      ])

      if (epoch >= 2n && runningBid.isWon === true) {
        runningBids.push({
          board: { id: boardId, name },
          epoch: Number(runningEpoch),
          displayRange: runningDisplayRange,
          bid: {
            price: Number(runningBid.price).toFixed(0),
            placedAt: Number(runningBid.placedAt).toFixed(0),
            contentURI: runningBid.contentURI,
          },
        })
      }
      if (upcomingBid.isWon === true) {
        upcomingBids.push({
          board: { id: boardId, name },
          epoch: Number(upcomingEpoch),
          displayRange: upcomingDisplayRange,
          bid: {
            price: Number(upcomingBid.price).toFixed(0),
            placedAt: Number(upcomingBid.placedAt).toFixed(0),
            contentURI: upcomingBid.contentURI,
          },
        })
      }
    }

    return json({ state: DATA_STATE.successful, runningBids, upcomingBids })
  } catch (error) {
    return sendError(error)
  }
}
