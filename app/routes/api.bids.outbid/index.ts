import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import range from 'lodash-es/range'

import { DATA_STATE } from '@constants'
import { getAlchemyContext } from '@server/alchemy.server'
import { getAddress, sendError } from '@server/helper.server'
import { getViemContext } from '@server/viem.server'
import { getEpochRange } from '@utils/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const address = getAddress(request)

    // get context
    const { alchemy } = getAlchemyContext()
    const { operator, registry } = getViemContext()

    const [lastTokenId] = await Promise.all([registry.read.lastTokenId()])

    const outbids = []
    const ids = range(1, Number(lastTokenId) + 1)

    for (const boardId of ids) {
      const id = BigInt(boardId)
      const [board, epoch, bidderBidCount] = await Promise.all([
        operator.read.getBoard([id]),
        operator.read.getLatestEpoch([id]),
        registry.read.getBidderBidCount([id, address]),
      ])

      if (board.startedAt === 0n || bidderBidCount === 0n) {
        continue
      }

      const { name, startedAt, epochInterval: interval } = board

      // gather all bids that have not yet been refunded
      const size = 5
      const pages = range(Math.ceil(Number(bidderBidCount) / size))
      for (const page of pages) {
        const offset = BigInt(page * size)
        const [, , , bids, epochs] = await operator.read.getBidderBids([
          id,
          address,
          BigInt(size),
          offset,
        ])

        for (const [index, bid] of bids.entries()) {
          const bidEpoch = epochs[index]

          if (bidEpoch >= epoch || bid.isWon === true) {
            // skip if the auction is running, or the bid is won
            continue
          }
          if (bid.isWithdrawn === true) {
            // skip the rest if the user has withdrawn before
            break
          }

          // get the higestbid to make sure the auction is cleared
          const [highestBidder, bidEpochRange] = await Promise.all([
            registry.read.highestBidder([id, bidEpoch]),
            getEpochRange(alchemy, startedAt, bidEpoch, interval),
          ])

          if (address === highestBidder) {
            // skip if the bid is the highest, then no need to refund
            continue
          }

          const highestBid = await registry.read.getBid([
            id,
            bidEpoch,
            highestBidder,
          ])
          if (highestBid.isWon === false) {
            // skip if the auction is not cleared
            continue
          }

          outbids.push({
            board: { id: boardId, name },
            epoch: Number(bidEpoch),
            epochRange: bidEpochRange,
            bid: {
              price: Number(bid.price).toFixed(0),
              contentURI: bid.contentURI,
            },
          })
        }
      }
    }

    return json({ state: DATA_STATE.successful, outbids })
  } catch (error) {
    return sendError(error)
  }
}
