import type { LoaderFunctionArgs } from '@remix-run/node'
import fs from 'fs-extra'
import path from 'path'

import { json } from '@remix-run/node'

import { DATA_STATE, ERROR } from '@constants'

import { readSecretEnv } from './env.server'

export const getBoardId = (request: LoaderFunctionArgs['request']) => {
  const url = new URL(request.url)
  const id = url.searchParams.get('id')

  if (!id) {
    throw new Error(ERROR.BOARD_ID_INVALID, { cause: ERROR.BOARD_ID_INVALID })
  }
  return id
}

export const getAddress = (request: LoaderFunctionArgs['request']) => {
  const url = new URL(request.url)
  const address = url.searchParams.get('address')
  return address as `0x${string}`
}

export const getEpoch = (request: LoaderFunctionArgs['request']) => {
  const url = new URL(request.url)
  const epoch = url.searchParams.get('epoch')

  if (!epoch) {
    throw new Error(ERROR.EPOCH_INVALID, { cause: ERROR.EPOCH_INVALID })
  }
  return epoch
}

export const getPublicStaticFile = async (
  filePath: string,
  fallback: string
) => {
  const temp = filePath.replace('./public/', '')
  const dataPath = path.resolve('./public', temp)
  const fileExists = await fs.pathExists(dataPath)

  if (!fileExists) {
    throw new Error(ERROR.ROUNDS_FILE_NOT_FOUND, {
      cause: ERROR.ROUNDS_FILE_NOT_FOUND,
    })
  }

  const data = JSON.parse((await fs.readFile(dataPath, 'utf8')) || fallback)
  return data
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
