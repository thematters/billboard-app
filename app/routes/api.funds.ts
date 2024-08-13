import type { LoaderFunctionArgs } from '@remix-run/node'

import { json } from '@remix-run/node'
import dayjs from 'dayjs'
import fs from 'fs-extra'
import { orderBy } from 'lodash-es'
import { optimism, optimismSepolia } from 'viem/chains'

import { ERROR, STATE } from '@constant'
import { getPublicPath, handleError, readFile, sendError } from '@util/server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    // collect envs
    const srcPath = './public/static'
    const roundsPath = getPublicPath(`${srcPath}/rounds.json`)

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

    const baseRounds = orderBy(rawRounds, (d) => Number(d.fromBlock), ['desc'])

    const rounds = []
    for (const round of baseRounds) {
      rounds.push({
        id: round.id,
        from: round.fromTime,
        to: round.toTime,
        cidCount: round.cidsCount,
        userCount: round.authorsCount,
        amount: Number(round.amountTotal) / 1e6,
      })
    }
    return json({ state: STATE.successful, rounds })
  } catch (error) {
    const errorMessage = handleError(error)
    console.log(errorMessage)

    // @ts-ignore
    return sendError(ERROR.UNKNOWN_ERROR, errorMessage)
  }
}
