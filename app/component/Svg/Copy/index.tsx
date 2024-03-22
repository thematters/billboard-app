import type { SVGProps } from '@type'

import { memo } from 'react'

const Copy = ({ css, width = 20, height = 20 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6.25 6.875V5c0-1.036.84-1.875 1.875-1.875H15c1.035 0 1.875.84 1.875 1.875v6.875c0 1.036-.84 1.875-1.875 1.875h-1.875M6.25 6.875H5c-1.036 0-1.875.84-1.875 1.875V15c0 1.035.84 1.875 1.875 1.875h6.25c1.036 0 1.875-.84 1.875-1.875v-1.25M6.25 6.875h5c1.036 0 1.875.84 1.875 1.875v5"
    />
  </svg>
)

export default memo(Copy)
