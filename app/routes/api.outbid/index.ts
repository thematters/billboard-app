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
    const address = getAddress(request)

    // get context
    const { alchemy } = getAlchemyContext()
    const { client, operator, registry } = getViemContext()

    const [lastTokenId, currBlock] = await Promise.all([
      registry.read.lastTokenId(),
      client.getBlockNumber(),
    ])

    const bids = []
    const ids = range(1, Number(lastTokenId) + 1)

    for (const boardId of ids) {
      const id = BigInt(boardId)
      const board = await operator.read.getBoard([id])
      if (board.startedAt === 0n) {
        continue
      }
    }

  } catch (error) {
    return sendError(error)
  }
}
