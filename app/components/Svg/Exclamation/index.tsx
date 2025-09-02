import { memo } from 'react'

const Exclamation = ({ classes, width = 16, height = 16 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M9.147 11.44V7.28a.415.415 0 0 0-.414-.413H7.74a.415.415 0 0 0-.413.413c0 .227.186.413.413.413h.58v3.747h-.94a.415.415 0 0 0-.413.413c0 .227.186.414.413.414h2.773a.415.415 0 0 0 .414-.414.415.415 0 0 0-.414-.413H9.147Z"
    />
    <path
      fill="currentColor"
      d="M8.5.92C4.6.92 1.42 4.1 1.42 8s3.18 7.08 7.08 7.08S15.58 11.9 15.58 8 12.407.92 8.5.92Zm0 13.333A6.262 6.262 0 0 1 2.247 8c0-3.447 2.813-6.247 6.253-6.247s6.253 2.807 6.253 6.254A6.262 6.262 0 0 1 8.5 14.26v-.007Z"
    />
    <path
      fill="currentColor"
      d="M8.533 5.053c.367 0 .667-.3.667-.666 0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667 0 .366.3.666.666.666Z"
    />
  </svg>
)

export default memo(Exclamation)
