import { memo } from 'react'

const ChevronRight = ({
  classes,
  width = 24,
  height = 24,
  opacity = 0.6,
}: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="currentColor"
      fillOpacity={opacity}
      d="M7.495 21.625a.62.62 0 0 1-.44-.18.628.628 0 0 1 0-.88l8.56-8.56-8.56-8.56a.64.64 0 0 1 0-.89.64.64 0 0 1 .89 0l9 9c.24.24.24.64 0 .88l-9 9.01a.62.62 0 0 1-.44.18h-.01Z"
    />
  </svg>
)

export default memo(ChevronRight)
