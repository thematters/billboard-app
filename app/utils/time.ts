import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone.js'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)
dayjs.extend(timezone)

export const genUTC8Date = (timestamp: number) => {
  return dayjs.tz(timestamp, 'Asia/Taipei').format('MMM DD YYYY')
}

export const genUTC8DateTime = (timestamp: number) => {
  return dayjs.tz(timestamp, 'Asia/Taipei').format('MMM DD YYYY HH:mm')
}
