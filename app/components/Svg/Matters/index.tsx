import { memo } from 'react'

const Matters = ({ classes, width = 40, height = 40 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="#202124"
      d="M40.8 20c0 11.046-8.953 20-20 20-11.045 0-20-8.954-20-20s8.955-20 20-20c11.046 0 20 8.954 20 20Z"
    />
    <path
      fill="#fff"
      d="M25.005 20c0 4.142-3.46 7.5-7.727 7.5-4.268 0-7.727-3.358-7.727-7.5 0-4.142 3.46-7.5 7.727-7.5s7.727 3.358 7.727 7.5Z"
    />
    <path
      fill="#fff"
      d="M23.468 26.457c1.861-1.566 3.04-3.878 3.04-6.457 0-2.579-1.178-4.891-3.04-6.457a7.078 7.078 0 0 1 1.714-.21c3.794 0 6.869 2.985 6.869 6.667s-3.075 6.667-6.869 6.667a7.078 7.078 0 0 1-1.714-.21Z"
    />
  </svg>
)

export default memo(Matters)
