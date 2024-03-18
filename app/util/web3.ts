import dayjs from 'dayjs'

import { LEASE_TERM_IN_DAYS } from '@constant'

export const genAuctionIds = (start: bigint, length = 20) => {
  const safeLength = Math.min(Number(start || 1), length)
  return Array.from(
    { length: safeLength },
    (_, i) => start + BigInt(i) * BigInt(-1)
  )
}

export const genEndAt = (timestamp: number) =>
  dayjs(timestamp).add(LEASE_TERM_IN_DAYS, 'day')
