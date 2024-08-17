import dayjs from 'dayjs'
import { padStart } from 'lodash-es'

export const formatAddress = (address: string, size = 3) =>
  `${address.substr(0, size)}...${address.slice(-size)}`

export const formatURL = (url: string, size = 15) =>
  `${url.replace(/^https?:\/\//, '').substr(0, size)}...`

export const formatDate = (time: number | string, pattern = 'MMM DD YYYY') =>
  dayjs(time).format(pattern)

export const formatRoundId = (id: string) =>
  padStart((id || '').replace('#', ''), 3, '0')

export const formatRound = (round: Record<string, any>) => ({
  ...round,
  id: formatRoundId(round.id),
  price: Number(round.amount || 0).toFixed(2),
  from: formatDate(round.from),
  to: formatDate(round.to),
})
