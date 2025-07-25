import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import groupBy from 'lodash-es/groupBy'
import orderBy from 'lodash-es/orderBy'

import { DATA_STATE, ERROR } from '@constants'
import { alchemy } from '@server/alchemy.server'
import { getAddress, getBoardId, sendError } from '@server/helper.server'
import { viemContext } from '@server/viem.server'
import { toFloatTaxRate } from '@utils/num'
import { genUTC8Date } from '@utils/time'
import { getEpochRange } from '@utils/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const boardId = getBoardId(request)

    // get context
    const id = BigInt(boardId)
    const { client, operator, registry } = viemContext

    const [board, epoch, currBlock] = await Promise.all([
      operator.read.getBoard([id]),
      operator.read.getLatestEpoch([id]),
      client.getBlockNumber(),
    ])
    if (!board) {
      throw new Error(ERROR.BOARD_NOT_FOUND, { cause: ERROR.BOARD_NOT_FOUND })
    }
    if (!currBlock) {
      throw new Error(ERROR.CURR_BLOCK_NUMBER_NOT_FOUND, {
        cause: ERROR.CURR_BLOCK_NUMBER_NOT_FOUND,
      })
    }

    const { startedAt, epochInterval: interval } = board
    const [epochRange, bidCount] = await Promise.all([
      getEpochRange(alchemy, startedAt, epoch, interval),
      registry.read.getBidCount([id, epoch]),
    ])

    // get currnt highest bid
    const highestBidder = await registry.read.highestBidder([id, epoch])
    const highestBid = await operator.read.getBid([id, epoch, highestBidder])

    // get the current running highest bid (currently on-air)
    let runningBid = { contentURI: '' }
    if (epoch >= 2n) {
      const runningEpoch = epoch - 2n
      const runningHighestBidder = await registry.read.highestBidder([
        id,
        runningEpoch,
      ])
      runningBid = await operator.read.getBid([
        id,
        runningEpoch,
        runningHighestBidder,
      ])
    }

    // get current user's bid if user connected wallet
    const address = getAddress(request)
    const [currBid, whitelisted] = await Promise.all([
      address
        ? operator.read.getBid([id, epoch, address as `0x${string}`])
        : null,
      address ? operator.read.whitelist([id, address as `0x${string}`]) : false,
    ])

    // get current all bids
    const bids = []
    if (Number(bidCount) > 0) {
      const events = (
        (await registry.getEvents.BidUpdated(
          { tokenId: id, epoch },
          { fromBlock: startedAt, toBlock: currBlock }
        )) as Anything[]
      ).map((d) => ({
        ...d.args,
        blockNumber: d.blockNumber,
        txHash: d.transactionHash || '',
      }))

      const grouppedEvents = groupBy(events, 'price')
      const filteredEvents = Object.entries(grouppedEvents).map(
        ([, events]) => {
          return orderBy(events, ['blockNumber'], ['asc'])[0]
        }
      )

      for (const event of filteredEvents) {
        const updatedAtTime = await alchemy.core.getBlock(
          Number(event.blockNumber)
        )
        const updatedAt = genUTC8Date(updatedAtTime.timestamp * 1000)
        bids.push({
          bidder: event.bidder,
          price: event.price.toString(),
          updatedAt,
          updatedAtTime: updatedAtTime.timestamp,
          txHash: event.txHash,
        })
      }
    }

    return json({
      state: DATA_STATE.successful,
      board: {
        id: Number(id),
        name: board.name,
        taxRate: toFloatTaxRate(Number(board.taxRate || 0)),
        imageURI: runningBid?.contentURI || board.imageURI,
        location: board.location,
      },
      epoch: Number(epoch),
      epochRange,
      highestBid: {
        bidder: highestBidder,
        price: Number(highestBid?.price || 0).toFixed(0),
      },
      currBid: currBid
        ? {
            price: Number(currBid.price || 0).toFixed(0),
            placedAt: Number(currBid.placedAt),
          }
        : null,
      bids,
      whitelisted,
    })
  } catch (error) {
    return sendError(error)
  }
}
