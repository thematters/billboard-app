import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'

import { DATA_STATE, ERROR } from '@constants'

import { readSecretEnv } from './env.server'

export const getBoardId = (request: LoaderFunctionArgs['request']) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (!id) {
    throw Error(ERROR.BOARD_ID_INVALID, { cause: ERROR.BOARD_ID_INVALID })
  }
  return id
}

export const getAddress = (request: LoaderFunctionArgs['request']) => {
  const url = new URL(request.url)
  const address = url.searchParams.get('address')
  return address
}

export const handleError = (error: Anything) => {
  const { env } = readSecretEnv()
  const isProduction = env === 'production'

  if (error?.cause) {
    // pre-handled error
    return { code: error.cause, message: error.cause }
  } else if (error?.details) {
    // handle error by details
    const parsed =
      typeof error.details === 'string'
        ? JSON.parse(error.details)
        : error.details
    return {
      code: ERROR.UNKNOWN_ERROR,
      message: parsed.message || 'Unknown Error',
    }
  } else if (error?.body) {
    // handle error by body
    const parsed =
      typeof error.body === 'string' ? JSON.parse(error.body) : error.body
    return {
      code: ERROR.UNKNOWN_ERROR,
      message: parsed.error.message || 'Unknown Error',
    }
  }
  // handle couldn't identify
  return {
    code: ERROR.UNKNOWN_ERROR,
    message: isProduction ? 'Unknown Error' : error?.message,
  }
}

export const sendError = (error: Anything) => {
  console.error(error)
  const { code, message } = handleError(error)
  return json({ state: DATA_STATE.error, code, error: message })
}
