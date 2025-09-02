import { BLOCK_TIME } from '@constants'
import { genUTC8DateTime } from '@utils/time'

export const genEpochRange = (time: number, interval: number) => {
  return {
    start: genUTC8DateTime(time * 1000),
    end: genUTC8DateTime(time * 1000 + BLOCK_TIME * interval * 1000),
  }
}

export const getEpochRange = async (
  client: Anything,
  startAt: bigint,
  epoch: bigint,
  interval: bigint
) => {
  const block = startAt + epoch * interval
  const time = await client.core.getBlock(Number(block))
  return genEpochRange(time.timestamp, Number(interval))
}

export const getShiftedEpochRange = async (
  client: Anything,
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
