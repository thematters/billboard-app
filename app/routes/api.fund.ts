import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import dayjs from 'dayjs'
import fs from 'fs-extra'
import _ from 'lodash'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, STATE } from '@constant'
import { readFile, sendError } from '@util/server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // collect envs
    const srcPath = './app/static'
    const roundsPath = `${srcPath}/rounds.json`

    const testPath = `./public/rounds.json`
    const test1 = await fs.readdir('.')
    const test2 = await fs.readdir('./build')
    const test3 = await fs.readdir('./public')
    const test4 = await fs.readdir('./public')
    const testExists = await fs.pathExists(testPath)
    console.log(test1, test2, test3, test4, testExists)

    // read the rounds files
    const roundExists = await fs.pathExists(roundsPath)
    if (!roundExists) {
      return sendError(ERROR.ROUNDS_NOT_FOUND)
    }

    const rawRounds = await readFile(roundsPath, '[]')
    if (!rawRounds) {
      return sendError(ERROR.ROUNDS_INVALID)
    }
    if (rawRounds.length === 0) {
      return json({ state: STATE.successful, rounds: [] })
    }

    const baseRounds = _.orderBy(rawRounds, ['fromBlock'], ['desc'])

    const rounds = []
    for (const round of baseRounds) {
      const { dirpath: path } = round
      const distPath = `${srcPath}/${path}/distrib.json`
      const distExists = await fs.pathExists(distPath)

      if (!distExists) {
        return sendError(ERROR.DIST_NOT_FOUND)
      }

      const rawDist = await readFile(distPath, '[]')
      const dist = rawDist.reduce(
        (r: Record<string, any>, d: Record<string, any>) => {
          r.cids.add(d.id)
          r.users.add(d.userName)
          return r
        },
        { cids: new Set(), users: new Set() }
      )

      rounds.push({
        id: round.id,
        from: round.fromTime,
        to: round.toTime,
        cidCount: dist.cids.size,
        userCount: dist.users.size,
        amount: Number(round.amountTotal) / 1e6,
      })
    }
    return json({ state: STATE.successful, rounds })
  } catch (error) {
    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, error?.message || 'unknown')
  }
}
