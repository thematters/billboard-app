import { memo } from 'react'

const Leave = ({ classes, width = 24, height = 24 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fill="#A9B2BB"
      d="M2.38 12c0-.34.28-.62.62-.62h11.99L9.3 5.69a.628.628 0 0 1 0-.88c.24-.24.64-.24.88 0l6.76 6.76c.24.24.24.64 0 .88l-6.76 6.76c-.24.24-.64.24-.88 0a.628.628 0 0 1 0-.88l5.69-5.69H3c-.34 0-.62-.28-.62-.62V12Zm18 8.45V3.55c0-.34.28-.62.62-.62.34 0 .62.28.62.62v16.9c0 .34-.28.62-.62.62-.34 0-.62-.28-.62-.62Z"
    />
  </svg>
)

export default memo(Leave)
