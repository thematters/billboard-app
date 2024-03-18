import { json } from '@remix-run/node'
import fs from 'fs-extra'
import { optimism, optimismSepolia } from 'wagmi/chains'

import { STATE } from '@constant'

export const readEnvs = () => {
  const envs = process.env
  const isProduction = envs.ENV === 'production'
  const urlContract = `${envs.URL_OP_EXPLORER}/address/${envs.ADDRESS_OPERATOR}`
  return {
    env: envs.ENV,
    chain: isProduction ? optimism : optimismSepolia,
    chainId: isProduction ? optimism.id : optimismSepolia.id,
    addressOperator: envs.ADDRESS_OPERATOR,
    addressRegistry: envs.ADDRESS_REGISTRY,
    addressDistribution: envs.ADDRESS_DISTRIBUTION,
    addressMulticall3: envs.ADDRESS_MULTICALL3,
    tokenIdShowCase: envs.TOKEN_ID_SHOW_CASE,
    idWalletConnect: envs.ID_WALLET_CONNECT,
    urlOpExplorer: envs.URL_OP_EXPLORER,
    urlCoinGecko: envs.URL_COINGECKO,
    urlContract,
  }
}

export const readSecretEnvs = () => {
  const envs = process.env
  return {
    keyAlchemy: envs.KEY_ALCHEMY,
    urlAlchemy: envs.URL_ALCHEMY,
  }
}

export const sendError = (code: string, error?: any) => {
  return json({ state: STATE.error, code, error })
}

export const readFile = async (path: string, fallback: string) => {
  return JSON.parse((await fs.readFile(path, 'utf8')) || fallback)
}
