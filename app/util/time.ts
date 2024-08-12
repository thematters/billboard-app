import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

// @ts-ignore
const dayjsUTC = dayjs.extend(utc)

// @ts-ignore
const dayjsTZ = dayjsUTC.extend(timezone)

export const genUTC8Date = (timestamp: number) => {
  return dayjsTZ.tz(timestamp, 'Asia/Taipei').format('MMM DD YYYY')
}

export const genUTC8DateTime = (timestamp: number) => {
  return dayjsTZ.tz(timestamp, 'Asia/Taipei').format('MMM DD YYYY HH:mm')
}
