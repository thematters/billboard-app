import { memo } from 'react'

const Bars = ({ classes, width = 32, height = 32 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 32 32"
    fill="none"
  >
    <path stroke="#fff" d="M2.667 4h26.666M2.667 28h26.666M2.667 16h26.666" />
  </svg>
)
export default memo(Bars)
