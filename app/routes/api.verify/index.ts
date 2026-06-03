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

    const [inWhitelist, whitelistDisabled] = await Promise.all([
      address ? operator.read.whitelist([id, address as `0x${string}`]) : false,
      operator.read.isBoardWhitelistDisabled([id]),
    ])
    const whitelisted = inWhitelist || whitelistDisabled

    return json({ state: DATA_STATE.successful, whitelisted })
  } catch (error) {
    return sendError(error)
  }
}
