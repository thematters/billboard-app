import { memo } from 'react'

const Close = ({ classes, width = 12, height = 12 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      fill="#fff"
      d="m6.442 6.005 4.28-4.28c.12-.12.12-.32 0-.44a.314.314 0 0 0-.44 0l-4.28 4.28-4.28-4.285a.32.32 0 0 0-.444 0 .32.32 0 0 0 0 .445l4.28 4.28-4.28 4.275c-.12.12-.12.32 0 .44.06.06.14.09.22.09.08 0 .16-.03.22-.09l4.28-4.28 4.28 4.28c.06.06.14.09.22.09.08 0 .16-.03.22-.09.12-.12.12-.32 0-.44L6.437 6l.005.005Z"
    />
  </svg>
)

export default memo(Close)
