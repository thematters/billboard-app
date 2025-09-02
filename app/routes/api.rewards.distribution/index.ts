import { json } from '@remix-run/node'
import orderBy from 'lodash-es/orderBy'

import { DATA_STATE, ERROR } from '@constants'
import { getPublicStaticFile, sendError } from '@server/helper.server'
import { formatDate, formatRoundId } from '@utils/format'

export const loader = async () => {
  try {
    const roundsData = await getPublicStaticFile(
      './public/static/rounds.json',
      '[]'
    )
    if (!roundsData) {
      throw new Error(ERROR.ROUNDS_INVALID, { cause: ERROR.ROUNDS_INVALID })
    }
    if (roundsData.length === 0) {
      // skip if no rounds data
      return json({ state: DATA_STATE.successful, rounds: [] })
    }

    const rounds = orderBy(roundsData, ['fromBlock'], ['desc']).map((d) => ({
      id: formatRoundId(d.id),
      from: formatDate(d.fromTime),
      to: formatDate(d.toTime),
      cidsCount: d.cidsCount,
      usersCount: d.authorsCount,
      amount: d.amountTotal,
    }))

    return json({ state: DATA_STATE.successful, rounds })
  } catch (error) {
    return sendError(error)
  }
}
