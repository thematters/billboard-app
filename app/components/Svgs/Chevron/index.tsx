import type { SVGProps } from '~/types'

import { memo } from 'react'

const Chevron = ({ customCss, width = 24, height = 24 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={customCss}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
)

export default memo(Chevron)
