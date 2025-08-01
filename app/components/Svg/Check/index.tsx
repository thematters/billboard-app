import { memo } from 'react'

const Check = ({ classes, width = 20, height = 20 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill="#121316"
      d="M10 .934C5 .934.934 5 .934 10 .934 15 5 19.067 10 19.067c5 0 9.067-4.067 9.067-9.067S14.992.934 10 .934Zm4.234 7.241-5.092 5.559a.737.737 0 0 1-.542.233h-.008a.718.718 0 0 1-.542-.258l-2.775-3.242a.726.726 0 0 1 .084-1.025.726.726 0 0 1 1.025.075l2.241 2.617 4.534-4.95a.727.727 0 0 1 1.033-.042c.3.275.317.733.042 1.033Z"
    />
  </svg>
)

export default memo(Check)
