import { json } from '@remix-run/node'
import { Alchemy, Network } from 'alchemy-sdk'
import dayjs from 'dayjs'
import _ from 'lodash'
import { parseAbiItem } from 'viem'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, LEASE_TERM_IN_DAYS } from '@constant'
import { readEnvs, sendError } from '@util/server'
import {
  getBidWonLogs,
  initClient,
  initOperator,
  initRegistry,
} from '@util/viem'
import { genAuctionIds, genEndAt, shortenAddress } from '@util/web3'

export const loader = async ({ request }) => {
  try {
    // collect envs
    const {
      env,
      chain,
      addressOperator,
      addressRegistry,
      tokenIdShowCase: tokenId,
      keyAlchemy,
    } = readEnvs()

    if (!addressRegistry) {
      return sendError(ERROR.CONTRACT_NOT_SET)
    }
    if (!tokenId) {
      return sendError(ERROR.BOARD_ID_NOT_SET)
    }

    // init alchemy
    const alchemy = new Alchemy({
      apiKey: keyAlchemy,
      network: env === 'production' ? Network.OPT_MAINNET : Network.OPT_SEPOLIA,
    })

    // init contracts
    const client = initClient(chain)
    const operator = initOperator(addressOperator, client)
    const registry = initRegistry(addressRegistry, client)
    const id = BigInt(tokenId)

    // get last auction of the given board
    const currBlockNumber = await client.getBlockNumber()
    const auctionId = await registry.read.nextBoardAuctionId([id])

    // get the latest 10 auctions
    const auctionIds = genAuctionIds(auctionId)
    const auctionFetcher = async (auctionId: bigint) => {
      const auction = await operator.read.getAuction([id, auctionId])
      const bidder = auction?.highestBidder
      const [bid, startAtBlock, events] = await Promise.all([
        operator.read.getBid([id, auctionId, bidder]),
        alchemy.core.getBlock(Number(auction.startAt)),
        getBidWonLogs(
          client,
          addressRegistry,
          id,
          auctionId,
          bidder,
          currBlockNumber
        ),
      ])
      const endAt = genEndAt(startAtBlock.timestamp * 1000)
      const txHash = events[0]?.transactionHash || ''

      return {
        id: Number(auctionId),
        endAt,
        price: Number(bid?.price || 0) / 1e6,
        to: shortenAddress(bidder),
        isWon: bid?.isWon || false,
        txHash,
      }
    }

    const auctions = await Promise.all(
      auctionIds.map((auctionId) => auctionFetcher(auctionId))
    )
    const filteredAuctions = _.filter(auctions, ['isWon', true])

    return json({
      state: 'successful',
      auctions: filteredAuctions,
    })
  } catch (error) {
    return sendError(ERROR.UNKNOWN_ERROR, error.message)
  }
}
