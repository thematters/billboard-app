import { StandardMerkleTree } from '@openzeppelin/merkle-tree'
import { json } from '@remix-run/node'
import fs from 'fs-extra'
import _ from 'lodash'
import { isAddress } from 'viem'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, PATHS } from '@constants'
import { initClient, initDistribution } from '@utils/viem'

const sendError = (code: string, error?: any) => {
  return json({ state: 'error', code, error })
}

const readFile = async (path: string, fallback: string) => {
  return JSON.parse((await fs.readFile(path, 'utf8')) || fallback)
}

const checkHasClaimed = async (
  contract: any,
  root: string,
  cid: string,
  address: string
) => {
  const result = await contract.read.hasClaimed([root, cid, address])
  return { cid, claimed: result }
}

export const loader = async ({ request }) => {
  try {
    // collect envs
    const srcPath = './app/static'
    const roundsPath = `${srcPath}/rounds.json`

    const chain = process.env.ENV === 'production' ? optimism : optimismSepolia
    const distributionAddress = process.env.DISTRIBUTION_ADDRESS

    if (!distributionAddress) {
      return sendError(ERROR.CONTRACT_NOT_SET)
    }

    // collect params
    const url = new URL(request.url)
    const userAddress = url?.searchParams?.get('address').toLowerCase()

    if (!isAddress(userAddress)) {
      return sendError(ERROR.INVALID_ADDRESS)
    }

    // read the rounds files
    const roundsExists = await fs.pathExists(roundsPath)
    if (!roundsExists) {
      return sendError(ERROR.ROUNDS_DATA_NOT_FOUND)
    }

    const rawRounds = await readFile(roundsPath, '[]')
    if (!rawRounds || rawRounds.length === 0) {
      return sendError(ERROR.ROUNDS_DATA_IS_EMPTY)
    }

    const rounds = _.orderBy(rawRounds, ['fromBlock'], ['desc']).map(
      ({ root, amount: rootAmount, dirpath: path }) => ({
        root,
        rootAmount,
        path,
      })
    )

    // gather each rounds' data
    let count = 0
    const data = []
    for (const round of rounds) {
      const { root, rootAmount, path } = round
      const distPath = `${srcPath}/${path}/distrib.json`
      const treePath = `${srcPath}/${path}/treedump.json`

      const [distExists, treeExists] = await Promise.all([
        fs.pathExists(distPath),
        fs.pathExists(treePath),
      ])

      if (!distExists) {
        return sendError(ERROR.DIST_DATA_NOT_FOUND)
      }
      if (!treeExists) {
        return sendError(ERROR.TREE_DATA_NOT_FOUND)
      }

      // gather data from distrib
      const rawDist = await readFile(distPath, '[]')
      const dist = _.filter(
        rawDist.map((d) => ({
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
      const tree = {}
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
            cid: d.id,
            url: d.url,
            title: d.title,
            proof: tree[d.id]?.proof,
            share: tree[d.id]?.share,
            amount: d.clr_amount,
          })
          r.cids.push(d.id)
          return r
        },
        { items: [], cids: [] }
      )

      // filter out claimed
      const client = initClient(chain)
      const distribution = initDistribution(distributionAddress, client)
      const cidChunks = _.chunk(base.cids, 2)

      let claimed = []
      for (const cids of cidChunks) {
        const result = await Promise.all(
          cids.map((cid) =>
            checkHasClaimed(distribution, root, cid, userAddress)
          )
        )
        const hasClaimed = result.reduce((r, d) => {
          if (d.claimed === true) {
            r.push(d.cid)
          }
          return r
        }, [])
        claimed = [...claimed, ...hasClaimed]
      }
      const items = _.filter(base.items, (d) => !claimed.includes(d.cid))
      data.push({ root, rootAmount, items })
      count += items.length
    }

    return json({ state: 'successful', items: data, count: count })
  } catch (error) {
    return sendError(ERROR.UNKNOWN_ERROR, error.message)
  }
}
