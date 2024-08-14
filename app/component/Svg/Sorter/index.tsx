import type { SVGProps } from '@type'

import { memo } from 'react'

const Sorter = ({ css, width = 24, height = 24 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.6}
      d="m6 15.082 3 3.005v-12m9.5 1h-6m4.154 5H12.5m2.77 5H12.5"
    />
  </svg>
)

export default memo(Sorter)
