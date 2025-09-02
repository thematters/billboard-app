import { memo } from 'react'

const Sorter = ({ classes, width = 22, height = 22 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
  >
    <path
      stroke="#7A828B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 13.745 8.75 16.5v-11m8.708.917h-5.5M15.766 11h-3.808m2.539 4.583h-2.539"
    />
  </svg>
)

export default memo(Sorter)
