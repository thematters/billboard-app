import type { LoaderFunctionArgs } from '@remix-run/node'

import { StandardMerkleTree } from '@openzeppelin/merkle-tree'
import { json } from '@remix-run/node'
import fs from 'fs-extra'
import { chunk, filter, orderBy } from 'lodash-es'
import { isAddress } from 'viem'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, STATE } from '@constant'
import { formatDate, formatRoundId } from '@util/format'
import { readEnvs } from '@util/envs'
import { getPublicPath, handleError, readFile, sendError } from '@util/server'
import { initClient, initDistribution } from '@util/viem'

const checkHasClaimed = async (
  contract: any,
  root: string,
  cid: string,
  address: string
) => {
  const result = await contract.read.hasClaimed([root, cid, address])
  return { cid, claimed: result }
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // collect envs
    const srcPath = './public/static'
    const roundsPath = getPublicPath(`${srcPath}/rounds.json`)

    const { chain, addressDistribution } = readEnvs()

    if (!chain) {
      return sendError(ERROR.CHAIN_NOT_SET)
    }
    if (!addressDistribution) {
      return sendError(ERROR.CONTRACT_NOT_SET)
    }

    // collect params
    const url = new URL(request.url)
    const userAddress = (url?.searchParams?.get('address') || '').toLowerCase()
    if (!isAddress(userAddress)) {
      return sendError(ERROR.ADDRESS_INVALID)
    }

    // read the rounds files
    const roundsExists = await fs.pathExists(roundsPath)
    if (!roundsExists) {
      return sendError(ERROR.ROUNDS_NOT_FOUND)
    }

    const rawRounds = await readFile(roundsPath, '[]')
    if (!rawRounds) {
      return sendError(ERROR.ROUNDS_INVALID)
    }
    if (rawRounds.length === 0) {
      return json({ state: STATE.successful, items: [], count: 0 })
    }

    const rounds = orderBy(rawRounds, ['fromBlock'], ['desc']).map(
      ({
        id,
        root,
        amountTotal: rootAmount,
        sharesTotal: rootShares,
        dirpath: path,
        fromTime,
        toTime,
      }) => ({
        roundId: formatRoundId(id),
        root,
        rootAmount,
        rootShares,
        path,
        from: formatDate(fromTime),
        to: formatDate(toTime),
      })
    )

    // gather each rounds' data
    let count = 0
    const data = []
    for (const round of rounds) {
      const { roundId, root, rootAmount, rootShares, path, from, to } = round
      const distPath = getPublicPath(`${srcPath}/${path}/distrib.json`)
      const treePath = getPublicPath(`${srcPath}/${path}/treedump.json`)

      const [distExists, treeExists] = await Promise.all([
        fs.pathExists(distPath),
        fs.pathExists(treePath),
      ])

      if (!distExists) {
        return sendError(ERROR.DIST_NOT_FOUND)
      }
      if (!treeExists) {
        return sendError(ERROR.TREE_NOT_FOUND)
      }

      // gather data from distrib
      const rawDist = await readFile(distPath, '[]')
      const dist = filter(
        rawDist.map((d: Record<string, any>) => ({
          ...d,
          eth_address: d.eth_address.toLowerCase(),
        })),
        (d) => d.eth_address === userAddress
      )
      if (dist.length === 0) {
        continue
      }

      // gather data from tree
      const rawTree = await readFile(treePath, '{}')
      const treeData = StandardMerkleTree.load(rawTree)
      const tree = {} as Record<string, any>
      for (const [i, v] of treeData.entries()) {
        const [cid, address, share] = v
        const lowerAddress = address.toLowerCase()
        if (userAddress != lowerAddress) {
          continue
        }
        const proof = treeData.getProof(i)
        tree[cid] = { cid, address: lowerAddress, share, proof }
      }

      // combine dist & tree as base data
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

      // filter out claimed
      const client = initClient(chain)
      const distribution = initDistribution(addressDistribution, client)
      const cidChunks = chunk(base.cids, 3) as Array<string[]>

      let claimed = [] as string[]
      for (const cids of cidChunks) {
        const result = await Promise.all(
          cids.map((cid: string) =>
            checkHasClaimed(distribution, root, cid, userAddress)
          )
        )
        const hasClaimed = result.reduce(
          (r: string[], d: Record<string, any>) => {
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

    return json({ state: STATE.successful, items: data, count: count })
  } catch (error) {
    const errorMessage = handleError(error)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
