import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import takeRight from 'lodash-es/takeRight'

import { DATA_STATE } from '@constants'
import { alchemy } from '@server/alchemy.server'
import { getBoardId, sendError } from '@server/helper.server'
import { viemContext } from '@server/viem.server'
import { getEpochRange } from '@utils/web3'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const boardId = getBoardId(request)

    // get context
    const id = BigInt(boardId)
    const { client, operator, registry } = viemContext

    const [board, currBlock] = await Promise.all([
      operator.read.getBoard([id]),
      client.getBlockNumber(),
    ])
    const { startedAt, epochInterval: interval } = board

    // get the latest 8 auctions
    const events = takeRight(
      (await registry.getEvents.BidWon(
        { tokenId: id },
        { fromBlock: startedAt, toBlock: currBlock }
      )) as Anything[],
      8
    )

    const auctions = []
    for (const event of events) {
      const { tokenId, epoch, bidder } = event.args
      if (typeof tokenId !== 'bigint' || typeof epoch !== 'bigint' || !bidder) {
        continue
      }

      const [bid, epochRange] = await Promise.all([
        operator.read.getBid([tokenId, epoch, bidder]),
        getEpochRange(alchemy, startedAt, epoch, interval),
      ])

      if (bid.isWon === false) {
        continue
      }

      auctions.push({
        epoch: Number(epoch),
        epochRange,
        bid: {
          bidder,
          price: bid.price.toString(),
          placedAt: bid.placedAt.toString(),
        },
        txHash: event.transactionHash,
      })
    }

    return json({ state: DATA_STATE.successful, auctions })
  } catch (error) {
    return sendError(error)
  }
}
