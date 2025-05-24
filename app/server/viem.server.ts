import { createPublicClient, getContract, http } from 'viem'

import DistributionABI from '@abis/distribution'
import OperatorABI from '@abis/operator'
import RegistryABI from '@abis/registry'
import { ERROR } from '@constants'
import { readEnv } from '@utils/env'
import { readSecretEnv } from './env.server'

// FIXME: setup the right type for _viemContext
declare global {
  // eslint-disable-next-line no-var
  var _viemContext: Anything
}

export const getViemContext = () => {
  if (globalThis._viemContext) {
    return globalThis._viemContext
  }

  const { chain, addressOperator, addressRegistry, addressDistribution } =
    readEnv()
  const { urlAlchemy } = readSecretEnv()

  if (!chain) {
    throw new Error(ERROR.CHAIN_NOT_SET, { cause: ERROR.CHAIN_NOT_SET })
  }
  if (!addressOperator || !addressRegistry) {
    throw new Error(ERROR.CONTRACT_NOT_SET, { cause: ERROR.CONTRACT_NOT_SET })
  }
  if (!urlAlchemy) {
    throw new Error(ERROR.ALCHEMY_NOT_SET, { cause: ERROR.ALCHEMY_NOT_SET })
  }

  const client = createPublicClient({
    chain,
    transport: http(urlAlchemy),
  })

  const operator = getContract({
    address: addressOperator as `0x${string}`,
    abi: OperatorABI,
    client: { public: client },
  })

  const registry = getContract({
    address: addressRegistry as `0x${string}`,
    abi: RegistryABI,
    client: { public: client },
  })

  const distribution = getContract({
    address: addressDistribution as `0x${string}`,
    abi: DistributionABI,
    client: { public: client },
  })

  globalThis._viemContext = {
    client,
    operator,
    registry,
    distribution,
  }
  return globalThis._viemContext
}
