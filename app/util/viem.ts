import type { Chain, PublicClient } from 'viem'

import { createPublicClient, getContract, http, parseAbiItem } from 'viem'

import ABIDistribution from '@abi/distribution'
import ABIOperator from '@abi/operator'
import ABIRegistry from '@abi/registry'

export const initClient = (chain: Chain, url?: string) =>
  createPublicClient({
    chain,
    transport: url ? http(url) : http(),
  })

export const initOperator = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: ABIOperator,
    client: {
      public: client,
    },
  })

export const initRegistry = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: ABIRegistry,
    client: {
      public: client,
    },
  })

export const initDistribution = (address: string, client: PublicClient) =>
  getContract({
    address: address as `0x${string}`,
    abi: ABIDistribution,
    client: {
      public: client,
    },
  })

export const getBidWonLogs = async (
  client: PublicClient,
  address: string,
  tokenId: bigint,
  auctionId: bigint,
  bidder: string,
  toBlock: bigint
) => {
  return await client.getLogs({
    address: address as `0x${string}`,
    event: parseAbiItem(
      'event BidWon(uint256 indexed tokenId, uint256 indexed auctionId, address indexed bidder)'
    ),
    args: {
      tokenId,
      auctionId,
      bidder: bidder as `0x${string}`,
    },
    fromBlock: 0n,
    toBlock,
  })
}
