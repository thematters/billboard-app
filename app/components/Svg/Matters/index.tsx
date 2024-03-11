import type { SVGProps } from '@types'

import { memo } from 'react'

const Matters = ({ css, width = 40, height = 40 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="#333"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
    />
    <path
      fill="#fff"
      d="M24.204 20c0 4.142-3.46 7.5-7.727 7.5-4.268 0-7.727-3.358-7.727-7.5 0-4.142 3.46-7.5 7.727-7.5s7.727 3.358 7.727 7.5Z"
    />
    <path
      fill="#fff"
      d="M22.667 26.457c1.862-1.566 3.04-3.878 3.04-6.457 0-2.579-1.178-4.891-3.04-6.457a7.078 7.078 0 0 1 1.715-.21c3.793 0 6.868 2.985 6.868 6.667s-3.075 6.667-6.868 6.667a7.078 7.078 0 0 1-1.715-.21Z"
    />
  </svg>
)

export default memo(Matters)
