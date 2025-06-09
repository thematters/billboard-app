import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import orderBy from 'lodash-es/orderBy'
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
    const { client, operator, registry } = getViemContext()

    const [lastTokenId, currBlock] = await Promise.all([
      registry.read.lastTokenId(),
      client.getBlockNumber(),
    ])

    const bids = []
    const ids = range(1, Number(lastTokenId) + 1)

    for (const boardId of ids) {
      const id = BigInt(boardId)
      const [board, epoch] = await Promise.all([
        operator.read.getBoard([id]),
        operator.read.getLatestEpoch([id]),
      ])

      if (board.startedAt == 0n) {
        continue
      }

      const { name, startedAt, epochInterval: interval } = board
      const [bid, epochRange] = await Promise.all([
        operator.read.getBid([id, epoch, address]),
        getEpochRange(alchemy, startedAt, epoch, interval),
      ])

      if (bid.placedAt == 0n) {
        continue
      }

      const highestBidder = await registry.read.highestBidder([id, epoch])
      const highestBid = await operator.read.getBid([id, epoch, highestBidder])
      const events = (
        (await registry.getEvents.BidUpdated(
          { tokenId: id, epoch, bidder: address },
          { fromBlock: startedAt, toBlock: currBlock }
        )) as Anything[]
      ).map((d) => ({
        ...d.args,
        blockNumber: d.blockNumber,
        txHash: d.transactionHash || '',
      }))
      const lastEvent = orderBy(events, ['blockNumber'], ['desc'])[0]

      bids.push({
        board: { id: boardId, name },
        epoch: Number(epoch),
        epochRange: epochRange,
        highestBid: {
          bidder: highestBidder,
          price: Number(highestBid?.price).toFixed(0),
        },
        bid: {
          price: Number(bid.price).toFixed(0),
          placedAt: Number(bid.placedAt).toFixed(0),
          contentURI: bid.contentURI,
          txHash: lastEvent.txHash,
        },
      })
    }
    return json({ state: DATA_STATE.successful, bids })
  } catch (error) {
    return sendError(error)
  }
}
