import { memo } from 'react'

const SlimCheck = ({ classes, width = 24, height = 24 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m4.625 10.124 5.703 8.476L21.5 4.2"
    />
  </svg>
)

export default memo(SlimCheck)
