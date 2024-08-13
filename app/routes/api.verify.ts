import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { ERROR, STATE } from '@constant'
import alchemy from '@service/alchemy.server'
import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'
import { handleError, sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
import { genEpochRange } from '@util/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const url = new URL(request.url)
    const tokenId = url.searchParams.get('id')
    const address = url.searchParams.get('address')
    if (!tokenId) {
      return sendError(ERROR.BOARD_ID_INVALID)
    }
    if (!address) {
      return sendError(ERROR.ADDRESS_INVALID)
    }

    // collect envs
    const { chain, addressOperator } = readEnvs()
    const { keyAlchemy, urlAlchemy } = readSecretEnvs()
    if (!chain) {
      return sendError(ERROR.CHAIN_NOT_SET)
    }
    if (!addressOperator) {
      return sendError(ERROR.CONTRACT_NOT_SET)
    }

    // init contracts
    const client = initClient(chain, urlAlchemy)
    const operator = initOperator(addressOperator, client)
    const id = BigInt(tokenId)

    const whitelisted = await operator.read.whitelist([
      id,
      address as `0x${string}`,
    ])
    return json({ state: STATE.successful, whitelisted })
  } catch (error) {
    const errorMessage = handleError(error)
    console.log(errorMessage)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
