import { json } from '@remix-run/node'
import fs from 'fs-extra'
import path from 'path'
import { optimism, optimismSepolia } from 'wagmi/chains'

import { STATE } from '@constant'

export const handleError = (error: any) => {
  if (error?.details) {
    // general error
    const parsed =
      typeof error.details === 'string'
        ? JSON.parse(error.details)
        : error.details
    return parsed.message || 'Unknown Error'
  } else if (error?.body) {
    // bad response
    const parsed =
      typeof error.body === 'string' ? JSON.parse(error.body) : error.body
    return parsed.error.message || 'Unknown Error'
  }
  return error?.message || 'Unknown Error'
}

export const sendError = (code: string, error?: any) => {
  return json({ state: STATE.error, code, error })
}

export const readFile = async (path: string, fallback: string) => {
  return JSON.parse((await fs.readFile(path, 'utf8')) || fallback)
}

export const getPublicPath = (origin: string) => {
  const temp = origin.replace('./public/', '')
  return path.resolve('./public', temp)
}
