import dayjs from 'dayjs'
import _ from 'lodash'

export const formatAddress = (address: string, size = 3) =>
  `${address.substr(0, size)}...${address.slice(-size)}`

export const formatDate = (time: number | string, pattern = 'MMM DD YYYY') =>
  dayjs(time).format(pattern)

export const formatRoundId = (id: string) =>
  _.padStart((id || '').replace('#', ''), 3, '0')

export const formatRound = (round: Record<string, any>) => ({
  ...round,
  id: formatRoundId(round.id),
  price: (round.amount || 0).toFixed(2),
  from: formatDate(round.from),
  to: formatDate(round.to),
})
