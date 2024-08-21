import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { BLOCK_TIME, ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
import { getEpochRange, getShiftedEpochRange } from '@util/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url)
    const tokenId = url.searchParams.get('id')
    const address = url.searchParams.get('address')
    const epoch = url.searchParams.get('epoch')
    if (!tokenId) {
      return sendError(ERROR.BOARD_ID_INVALID)
    }
    if (!address) {
      return sendError(ERROR.ADDRESS_INVALID)
    }
    if (!epoch) {
      return sendError(ERROR.EPOCH_INVALID)
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

    const [board, bid] = await Promise.all([
      operator.read.getBoard([id]),
      operator.read.getBid([id, BigInt(epoch), address as `0x${string}`]),
    ])
    if (!board) {
      return sendError(ERROR.BOARD_NOT_FOUND)
    }

    // get current epoch start and end
    const { name, startedAt, epochInterval: interval } = board
    const epochRange = await getEpochRange(
      alchemy,
      startedAt,
      BigInt(epoch),
      interval
    )

    // get running epoch start and end
    const runningEpochRange = await getShiftedEpochRange(
      alchemy,
      startedAt,
      BigInt(epoch),
      interval,
      2
    )

    return json({
      state: STATE.successful,
      board: { name: board.name },
      epoch,
      epochRange,
      runningEpochRange,
      bid: {
        contentURI: bid.contentURI,
        redirectURI: bid.redirectURI,
        placedAt: Number(bid.placedAt).toFixed(0),
      },
    })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
