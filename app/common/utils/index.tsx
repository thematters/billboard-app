import type { Chain, PublicClient } from 'viem'
import { createPublicClient, getContract, http } from 'viem'

import { billboardAbi, billboardRegistryAbi } from '../abi'

export const initClient = (chain: Chain) => {
  return createPublicClient({
    chain,
    transport: http(),
  })
}

export const initOperatorContract = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: billboardAbi,
    publicClient: client,
  })

export const initRegistryContract = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: billboardRegistryAbi,
    publicClient: client,
  })

export const makeShrinkedContent = (value: string) => {
  const start = value.substr(0, 4)
  const end = value.slice(-4)
  return `${start}...${end}`
}
