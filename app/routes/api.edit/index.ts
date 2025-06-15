import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { DATA_STATE, ERROR } from '@constants'
import { getAlchemyContext } from '@server/alchemy.server'
import {
  getAddress,
  getBoardId,
  getEpoch,
  sendError,
} from '@server/helper.server'
import { getViemContext } from '@server/viem.server'
import { getEpochRange, getShiftedEpochRange } from '@utils/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const boardId = getBoardId(request)
    const address = getAddress(request)
    const boardEpoch = getEpoch(request)

    // get context
    const id = BigInt(boardId)
    const epoch = BigInt(boardEpoch)
    const { alchemy } = getAlchemyContext()
    const { operator, registry } = getViemContext()

    const [board, bid, highestBidder] = await Promise.all([
      operator.read.getBoard([id]),
      operator.read.getBid([id, epoch, address]),
      registry.read.highestBidder([id, epoch]),
    ])
    if (!board) {
      throw new Error(ERROR.BOARD_NOT_FOUND, { cause: ERROR.BOARD_NOT_FOUND })
    }
    if (highestBidder !== address) {
      throw new Error(ERROR.BID_NOT_FOUND, { cause: ERROR.BID_NOT_FOUND })
    }

    const { name, startedAt, epochInterval: interval } = board
    const [epochRange, displayEpochRange] = await Promise.all([
      getEpochRange(alchemy, startedAt, epoch, interval),
      getShiftedEpochRange(alchemy, startedAt, epoch, interval, 2),
    ])

    return json({
      state: DATA_STATE.successful,
      board: { id: boardId, name },
      epoch: boardEpoch,
      epochRange,
      displayEpochRange,
      bid: {
        contentURI: bid.contentURI,
        redirectURI: bid.redirectURI,
        placedAt: Number(bid?.placedAt || 0).toFixed(0),
      },
    })
  } catch (error) {
    return sendError(error)
  }
}
