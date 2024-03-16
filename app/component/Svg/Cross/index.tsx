import type { SVGProps } from '@type'

import { memo } from 'react'

const Cross = ({ css, width = 16, height = 16 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <path stroke="currentColor" d="M0 8h16M8 0v16" />
  </svg>
)

export default memo(Cross)
