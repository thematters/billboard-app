import { json } from '@remix-run/node'
import fs from 'fs-extra'
import path from 'path'
import { optimism, optimismSepolia } from 'wagmi/chains'

import { STATE } from '@constant'

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
