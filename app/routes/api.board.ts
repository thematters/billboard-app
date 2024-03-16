import { json } from '@remix-run/node'
import { Alchemy, Network } from 'alchemy-sdk'
import dayjs from 'dayjs'
import _ from 'lodash'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, LEASE_TERM_IN_DAYS } from '@constant'
import { readEnvs, sendError } from '@util/server'
import { initClient, initOperator, initRegistry } from '@util/viem'
import { genEndAt } from '@util/web3'

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

    if (!addressOperator || !addressRegistry) {
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

    // get board
    const [board, taxRate, auctionId] = await Promise.all([
      operator.read.getBoard([id]),
      operator.read.getTaxRate(),
      registry.read.nextBoardAuctionId([id]),
    ])
    if (!board) {
      return sendError(ERROR.BOARD_NOT_FOUND)
    }

    // get the latest auction
    const auction = await operator.read.getAuction([id, auctionId])
    const lastHighestBid = await registry.read.getBid([
      id,
      auctionId,
      auction.highestBidder,
    ])
    const startAtBlock = await alchemy.core.getBlock(Number(auction.startAt))
    const endAt = genEndAt(startAtBlock.timestamp * 1000)

    return json({
      state: 'successful',
      board,
      taxRate: Number(taxRate) / LEASE_TERM_IN_DAYS / 100,
      auction: {
        id: Number(auctionId),
        endAt,
      },
      highestBid: {
        price: Number(lastHighestBid.price) / 1e6,
        isWon: lastHighestBid.isWon,
      },
    })
  } catch (error) {
    return sendError(ERROR.UNKNOWN_ERROR, error.message)
  }
}
