import { NavLink, useLoaderData } from '@remix-run/react'
import _ from 'lodash'
import type React from 'react'
import { polygon, polygonMumbai } from 'viem/chains'

import Auction from '~/components/Board/Auction'
import Detail from '~/components/Board/Detail'
import History from '~/components/Board/History'
import Crate from '~/components/Crate'

import { genAuctionIds, initInstances, readRecord, reorg } from './helper'

export const loader = async () => {
  if (!process.env.TOKEN_ID) {
    return {}
  }

  const tokenId = BigInt(process.env.TOKEN_ID)
  const { operator, registry } = initInstances(
    process.env.ENV === 'production' ? polygon : polygonMumbai,
    process.env.OPERATOR_CONTRACT || '',
    process.env.REGISTRY_CONTRACT || ''
  )

  // get board & setup
  const [board, taxRate, auctionId, rateResponse] = await Promise.all([
    operator.read.getBoard([tokenId]),
    operator.read.getTaxRate(),
    registry.read.nextBoardAuctionId([tokenId]),
    fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=matic-network&vs_currencies=usd'
    ),
  ])
  const maticRate = await rateResponse.json()

  // get last 10 auctions
  const auctionIds = genAuctionIds(auctionId, 10)
  const reads = await Promise.all(
    auctionIds.map(async (auctionId) =>
      readRecord(operator, tokenId, auctionId)
    )
  )
  const currAuction = reads[0]
  const lastWon = _.find(reads, { isWon: true })
  const auctions = reorg(reads)

  return {
    config: {
      contract: process.env.OPERATOR_CONTRACT,
      polygonURL: process.env.POLYGON_URL,
      taxRate: Number(taxRate),
      maticRate: maticRate?.['matic-network']?.['usd'] || 0,
    },
    auction: {
      currAuction,
      lastWon,
    },
    board: {
      tokenId: Number(tokenId),
      ...board,
    },
    auctions,
  }
}

const Showcase = () => {
  const data = useLoaderData() as Record<string, any>

  const inner = [
    'px-4 pt-20 pb-9 lg:px-28 lg:pt-44 lg:pb-12',
    'grid grid-cols-1 gap-y-6 lg:gap-y-10',
  ].join(' ')

  return (
    <Crate color="dim" innerClass={inner} hasDots>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-10">
        {/* ContentURI */}
        <img
          className="w-full h-auto rounded-2xl"
          src={data.board.contentURI}
        />

        {/* Auction */}
        <Auction
          outerClass="lg:col-span-2"
          name={data.board.name}
          price={data.auction.lastWon.price}
          maticRate={data.config.maticRate}
          taxRate={data.config.taxRate}
          next={data.auction.currAuction.endAt}
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6">
        {/* Metadata */}
        <Detail
          contract={data.config.contract}
          location={data.board.location}
          tokenId={data.board.tokenId}
          tokenURI={data.board.contentURI}
          polygonURL={data.config.polygonURL}
        />

        {/* History */}
        <History outerClass="lg:col-span-2" items={data.auctions} />
      </section>
    </Crate>
  )
}

export default Showcase
