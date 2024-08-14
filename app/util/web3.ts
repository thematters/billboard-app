import dayjs from 'dayjs'

import { BLOCK_TIME } from '@constant'
import { genUTC8DateTime } from '@util/time'

export const genEpochRange = (time: number, interval: number) => {
  return {
    start: genUTC8DateTime(time * 1000),
    end: genUTC8DateTime(time * 1000 + BLOCK_TIME * interval * 1000),
  }
}

export const getEpochRange = async (
  client: any,
  startAt: bigint,
  epoch: bigint,
  interval: bigint
) => {
  const block = startAt + epoch * interval
  const time = await client.core.getBlock(Number(block))
  return genEpochRange(time.timestamp, Number(interval))
}

export const getShiftedEpochRange = async (
  client: any,
  startAt: bigint,
  epoch: bigint,
  interval: bigint,
  shift: number
) => {
  const block = startAt + epoch * interval
  const time = await client.core.getBlock(Number(block))
  const shiftTime = BLOCK_TIME * Number(interval) * shift
  return genEpochRange(time.timestamp + shiftTime, Number(interval))
}
