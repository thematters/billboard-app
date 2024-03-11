import type { SVGProps } from '@types'

import { memo } from 'react'

const Link = ({ css, width = 20, height = 20 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.75 16.25 12.5-12.5m0 0H6.875m9.375 0v9.375"
    />
  </svg>
)

export default memo(Link)
