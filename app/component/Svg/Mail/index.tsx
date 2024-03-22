import type { SVGProps } from '@type'

import { memo } from 'react'

const Mail = ({ css, width = 24, height = 24 }: SVGProps) => (
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
      strokeWidth={2}
      d="m6 8 4.746 4.606a2 2 0 0 0 2.829-.043L18 8M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z"
    />
  </svg>
)

export default memo(Mail)
