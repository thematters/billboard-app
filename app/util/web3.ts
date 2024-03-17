import dayjs from 'dayjs'

import { LEASE_TERM_IN_DAYS } from '@constant'

export const shortenAddress = (address: string, size = 3) =>
  `${address.substr(0, size)}...${address.slice(-size)}`

export const genAuctionIds = (start: bigint, length = 20) => {
  const safeLength = Math.min(Number(start || 1), length)
  return Array.from(
    { length: safeLength },
    (_, i) => start + BigInt(i) * BigInt(-1)
  )
}

export const genEndAt = (timestamp: number) =>
  dayjs(timestamp).add(LEASE_TERM_IN_DAYS, 'day')

export const formatDate = (time: number | string, pattern = 'MMM DD YYYY') =>
  dayjs(time).format(pattern)
