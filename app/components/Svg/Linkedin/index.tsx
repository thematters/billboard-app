import type { SVGProps } from '@types'

import { memo } from 'react'

const Linkedin = ({ css, width = 40, height = 40 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <rect width={40} height={40} fill="#333" rx={20} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.825 16.862h3.142v1.565c.452-.9 1.613-1.709 3.356-1.709 3.342 0 4.135 1.792 4.135 5.079v6.087h-3.383v-5.339c0-1.872-.453-2.927-1.605-2.927-1.597 0-2.261 1.138-2.261 2.926v5.34h-3.384V16.862ZM12.024 27.74h3.383V16.718h-3.383V27.74Zm3.868-14.616a2.139 2.139 0 0 1-.637 1.525 2.19 2.19 0 0 1-3.077 0 2.154 2.154 0 0 1-.636-1.525c0-.572.228-1.12.636-1.525a2.185 2.185 0 0 1 3.077 0c.407.405.637.953.637 1.525Z"
      clipRule="evenodd"
    />
  </svg>
)

export default memo(Linkedin)
