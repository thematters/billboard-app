import { memo } from 'react'

const Dash = ({ classes, width = 20, height = 22 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 20 22"
    fill="none"
  >
    <path stroke="#4A5B19" d="M0 11h20" />
  </svg>
)
export default memo(Dash)
