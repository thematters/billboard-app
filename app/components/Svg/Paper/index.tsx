import type { SVGProps } from '@types'

import { memo } from 'react'

const Paper = ({ css, width = 24, height = 24 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8 16h4m-4-4h7M8 8h7M4 3h16v13.304C20 18.887 17.46 21 14.353 21H4V3Z"
    />
  </svg>
)

export default memo(Paper)
