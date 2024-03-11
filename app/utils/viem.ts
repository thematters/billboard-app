import type { Chain, PublicClient } from 'viem'

import { createPublicClient, getContract, http } from 'viem'
import { http, createConfig, createStorage } from 'wagmi'

import billboardAbi from '@abis/billboard'
import billboardRegistryAbi from '@abis/billboardRegistry'
import distributionAbi from '@abis/distribution'

export const initClient = (chain: Chain) =>
  createPublicClient({
    chain,
    transport: http(),
  })

export const initBillboard = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: billboardAbi,
    client: {
      public: client,
    },
  })

export const initBillboardRegistry = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: billboardRegistryAbi,
    client: {
      public: client,
    },
  })

export const initDistribution = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: distributionAbi,
    client: {
      public: client,
    },
  })

export const initInstances = (
  chain: Chian,
  billboardAddress: string,
  billboardRegistryAddress: string,
  distributionAddress: string
) => {
  const client = initClient(chain)
  return {
    billboard: initBillboard(billboardAddress, client),
    billboardRegistry: initBillboardRegistry(billboardRegistryAddress, client),
    distribution: initDistribution(distributionAddress, client),
  }
}
