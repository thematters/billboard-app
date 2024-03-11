import type { SVGProps } from '@types'

import { memo } from 'react'

const Cancel = ({ css, width = 24, height = 24 }: SVGProps) => (
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
      strokeWidth={1.25}
      d="m5.637 5.635 12.728 12.728m-12.728 0L18.365 5.635"
    />
  </svg>
)

export default memo(Cancel)
