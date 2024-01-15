import _ from 'lodash'
import dayjs from 'dayjs'
import type { Chain, PublicClient } from 'viem'

import {
  initClient,
  initOperatorContract,
  initRegistryContract,
  makeShrinkedContent,
} from '~/common/utils'

// Initialize client and contract instances
export const initInstances = (
  chain: Chain,
  operator_contract: string,
  registry_contract: string
) => {
  const client = initClient(chain)
  return {
    operator: initOperatorContract(operator_contract, client),
    registry: initRegistryContract(registry_contract, client),
  }
}

// Generate recent auction ids (new to old)
export const genAuctionIds = (start: bigint, length: number) => {
  return Array.from({ length }, (_, i) => start + BigInt(i) * BigInt(-1))
}

// Make contract read auction and bid data
export const readRecord = async (
  contract: any,
  tokenId: BigInt,
  auctionId: BigInt
) => {
  const auction = await contract.read.getAuction([tokenId, auctionId])
  const bidder = auction?.highestBidder || ''
  const bid = await contract.read.getBid([tokenId, auctionId, bidder])

  return formatter({
    auctionId: Number(auctionId),
    endAt: Number(auction?.endAt || 0) * 1000,
    leaseStartAt: Number(auction?.leaseStartAt || 0) * 1000,
    price: Number(bid?.price || 0),
    to: bidder,
    isWon: bid?.isWon || false,
  })
}

// Format on-chain data into readable data
export const formatter = (data: Record<string, any>) => {
  const dateFormat = (timestamp: number) => {
    return timestamp != 0 ? dayjs(timestamp).format('MMM. DD YYYY') : ''
  }

  return {
    auctionId: data.auctionId,
    endAt: dateFormat(data?.endAt || 0),
    price: data.price,
    from: makeShrinkedContent(data?.from || ''),
    to: makeShrinkedContent(data?.to || ''),
    date: dateFormat(data?.leaseStartAt || 0),
    isWon: data?.isWon || false,
  }
}

// Filter out data and fill previous owner
export const reorg = (data: Array<Record<string, any>>) => {
  return data.reduce((res, item, index) => {
    if ((index === 0 && item.isWon == false) || index === data.length - 1) {
      return res
    }
    res.push({
      ...item,
      from: data[index + 1].to,
    })
    return res
  }, [])
}
