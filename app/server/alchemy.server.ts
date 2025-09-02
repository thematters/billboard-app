import { Alchemy, Network } from 'alchemy-sdk'

import { ERROR } from '@constants'

import { readSecretEnv } from './env.server'

const getAlchemyContext = () => {
  const { env, keyAlchemy, urlAlchemy } = readSecretEnv()

  if (!keyAlchemy || !urlAlchemy) {
    throw new Error(ERROR.ALCHEMY_NOT_SET, { cause: ERROR.ALCHEMY_NOT_SET })
  }

  const alchemy = new Alchemy({
    apiKey: keyAlchemy,
    network: env === 'production' ? Network.OPT_MAINNET : Network.OPT_SEPOLIA,
  })

  return alchemy
}

export const alchemy = getAlchemyContext()
