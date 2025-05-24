import { Alchemy, Network } from 'alchemy-sdk'

import { ERROR } from '@constants'

import { readSecretEnv } from './env.server'

// FIXME: setup the right type for _alchemyContext
declare global {
  // eslint-disable-next-line no-var
  var _alchemyContext: Anything
}

export const getAlchemyContext = () => {
  if (globalThis._alchemyContext) {
    return globalThis._alchemyContext
  }

  const { env, keyAlchemy, urlAlchemy } = readSecretEnv()

  if (!keyAlchemy || !urlAlchemy) {
    throw new Error(ERROR.ALCHEMY_NOT_SET, { cause: ERROR.ALCHEMY_NOT_SET })
  }

  const alchemy = new Alchemy({
    apiKey: keyAlchemy,
    network: env === 'production' ? Network.OPT_MAINNET : Network.OPT_SEPOLIA,
  })

  globalThis._alchemyContext = { alchemy }
  return globalThis._alchemyContext
}
