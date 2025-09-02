import type { LoaderFunctionArgs } from '@remix-run/node'

import { StandardMerkleTree } from '@openzeppelin/merkle-tree'
import { json } from '@remix-run/node'
import chunk from 'lodash-es/chunk'
import filter from 'lodash-es/filter'
import orderBy from 'lodash-es/orderBy'

import { DATA_STATE, ERROR } from '@constants'
import {
  getAddress,
  getPublicStaticFile,
  sendError,
} from '@server/helper.server'
import { viemContext } from '@server/viem.server'
import { formatDate, formatRoundId } from '@utils/format'

const checkHasClaimed = async (
  contract: Anything,
  root: string,
  cid: string,
  address: string
) => {
  const result = await contract.read.hasClaimed([root, cid, address])
  return { cid, claimed: result }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // get params
    const address = (getAddress(request) || '').toLowerCase()

    // get context
    const { distribution } = viemContext

    const roundsData = await getPublicStaticFile(
      './public/static/rounds.json',
      '[]'
    )
    if (!roundsData) {
      throw new Error(ERROR.ROUNDS_INVALID, { cause: ERROR.ROUNDS_INVALID })
    }
    if (roundsData.length === 0) {
      // skip if no rounds data
      return json({ state: DATA_STATE.successful, rounds: [], count: 0 })
    }

    const rounds = orderBy(roundsData, ['fromBlock'], ['desc']).map((d) => ({
      roundId: formatRoundId(d.id),
      root: d.root,
      rootAmount: d.amountTotal,
      rootShares: d.sharesTotal,
      path: d.dirpath,
      from: formatDate(d.fromTime),
      to: formatDate(d.toTime),
    }))

    let count = 0
    const data = []
    for (const round of rounds) {
      const { roundId, root, rootAmount, rootShares, path, from, to } = round
      const [rawDist, rawTree] = await Promise.all([
        getPublicStaticFile(`./public/static/${path}/distrib.json`, '[]'),
        getPublicStaticFile(`./public/static/${path}/treedump.json`, '{}'),
      ])

      // gather data from distrib
      const dist = filter(
        rawDist.map((d: Record<string, Anything>) => ({
          ...d,
          eth_address: d.eth_address.toLowerCase(),
        })),
        (d) => d.eth_address === address
      )

      if (dist.length === 0) {
        continue
      }

      // gather data from tree
      const treeData = StandardMerkleTree.load(rawTree)
      const tree = {} as Record<string, Anything>
      for (const [i, v] of treeData.entries()) {
        const [cid, distAddress, share] = v
        const loweredDistAddress = distAddress.toLowerCase()
        if (address != loweredDistAddress) {
          continue
        }
        const proof = treeData.getProof(i)
        tree[cid] = { cid, address: loweredDistAddress, share, proof }
      }

      // combine dist and tree as base data
      const base = dist.reduce(
        (r, d) => {
          r.items.push({
            roundId,
            cid: d.id,
            url: d.url,
            title: d.title,
            proof: tree[d.id]?.proof,
            share: tree[d.id]?.share,
            amount: (rootAmount * tree[d.id]?.share) / rootShares,
            from,
            to,
          })
          r.cids.push(d.id)
          return r
        },
        { items: [], cids: [] }
      )

      // filter out claimed records
      const cidChunks = chunk(base.cids, 3) as Array<string[]>
      let claimed = [] as string[]
      for (const cids of cidChunks) {
        const result = await Promise.all(
          cids.map((cid: string) =>
            checkHasClaimed(distribution, root, cid, address)
          )
        )
        const hasClaimed = result.reduce(
          (r: string[], d: Record<string, Anything>) => {
            if (d.claimed === true) {
              r.push(d.cid)
            }
            return r
          },
          []
        )
        claimed = [...claimed, ...hasClaimed]
      }
      const items = filter(base.items, (d) => !claimed.includes(d.cid))
      data.push({ root, rootAmount, items })
      count += items.length
    }

    return json({ state: DATA_STATE.successful, records: data, count })
  } catch (error) {
    return sendError(error)
  }
}
