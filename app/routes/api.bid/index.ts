import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { DATA_STATE, ERROR } from '@constants'
import { alchemy } from '@server/alchemy.server'
import {
  getAddress,
  getBoardId,
  getEpoch,
  sendError,
} from '@server/helper.server'
import { viemContext } from '@server/viem.server'
import { toFloatTaxRate } from '@utils/num'
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
    const { operator, registry } = viemContext

    const [board, prevBid, highestBidder] = await Promise.all([
      operator.read.getBoard([id]),
      operator.read.getBid([id, epoch, address]),
      registry.read.highestBidder([id, epoch]),
    ])
    if (!board) {
      throw new Error(ERROR.BOARD_NOT_FOUND, { cause: ERROR.BOARD_NOT_FOUND })
    }

    const { startedAt, epochInterval: interval } = board
    const [highestBid, epochRange, displayEpochRange] = await Promise.all([
      operator.read.getBid([id, epoch, highestBidder]),
      getEpochRange(alchemy, startedAt, epoch, interval),
      getShiftedEpochRange(alchemy, startedAt, epoch, interval, 2),
    ])

    return json({
      state: DATA_STATE.successful,
      board: {
        name: board.name,
        taxRate: toFloatTaxRate(Number(board.taxRate || 0)),
      },
      epoch: boardEpoch,
      epochRange,
      displayEpochRange,
      highestBid: {
        price: Number(highestBid?.price || 0).toFixed(0),
      },
      prevBid: {
        price: Number(prevBid?.price || 0).toFixed(0),
        contentURI: prevBid.contentURI,
        redirectURI: prevBid.redirectURI,
        placedAt: Number(prevBid?.placedAt || 0).toFixed(0),
      },
    })
  } catch (error) {
    return sendError(error)
  }
}
