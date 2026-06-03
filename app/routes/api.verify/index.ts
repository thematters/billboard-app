import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import { DATA_STATE } from '@constants'
import { getAddress, getBoardId, sendError } from '@server/helper.server'
import { viemContext } from '@server/viem.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const boardId = getBoardId(request)
    const address = getAddress(request)

    // get context
    const id = BigInt(boardId)
    const { operator } = viemContext

    const [isWhitelistDisabled, whitelisted] = await Promise.all([
      operator.read.isBoardWhitelistDisabled([id]),
      operator.read.whitelist([id, address as `0x${string}`]),
    ])
    const eligible = isWhitelistDisabled || whitelisted

    return json({
      state: DATA_STATE.successful,
      eligible,
      isWhitelistDisabled,
      whitelisted,
    })
  } catch (error) {
    return sendError(error)
  }
}
