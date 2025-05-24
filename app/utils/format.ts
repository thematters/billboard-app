import dayjs from 'dayjs'
import padStart from 'lodash-es/padStart'

export const formatAddress = (address?: `0x${string}`) => {
  if (!address) {
    return '…'
  }
  return address.slice(0, 3) + '…' + address.slice(-3)
}

export const formatURL = (url: string, size = 15) =>
  `${url.replace(/^https?:\/\//, '').substr(0, size)}…`

export const formatDate = (time: number | string, pattern = 'MMM DD YYYY') =>
  dayjs(time).format(pattern)

export const formatRoundId = (id: string) =>
  padStart((id || '').replace('#', ''), 3, '0')

export const formatRound = (round: Record<string, Anything>) => ({
  ...round,
  id: formatRoundId(round.id),
  price: Number(round.amount || 0).toFixed(2),
  from: formatDate(round.from),
  to: formatDate(round.to),
})
