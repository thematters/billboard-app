import { Alchemy, Network } from 'alchemy-sdk'

import { readSecretEnvs } from '@util/envs.server'
import { readEnvs } from '@util/envs'

const initAlchemy = () => {
  const { env } = readEnvs()
  const { keyAlchemy, urlAlchemy } = readSecretEnvs()

  if (!keyAlchemy || !urlAlchemy) {
    throw new Error('Alchemy credentials not set')
  }

  return new Alchemy({
    apiKey: keyAlchemy,
    network: env === 'production' ? Network.OPT_MAINNET : Network.OPT_SEPOLIA,
  })
}

const alchemy = initAlchemy()

export default alchemy
