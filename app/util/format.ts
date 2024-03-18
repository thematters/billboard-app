import dayjs from 'dayjs'
import _ from 'lodash'

export const formatAddress = (address: string, size = 3) =>
  `${address.substr(0, size)}...${address.slice(-size)}`

export const formatDate = (time: number | string, pattern = 'MMM DD YYYY') =>
  dayjs(time).format(pattern)

export const formatRound = (round: Record<string, any>) => {
  const id = (round.id || '').replace('#', '')
  const amount = round.amount || 0
  return {
    ...round,
    id: _.padStart(id, 3, '0'),
    price: amount.toFixed(2),
    from: formatDate(round.from),
    to: formatDate(round.to),
  }
}
