import type { SVGProps } from '~/types'

import { memo } from 'react'

const Down = ({ customCss, width = 30, height = 99 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={customCss}
    width={width}
    height={height}
    viewBox="0 0 30 99"
    fill="none"
  >
    <path stroke="currentColor" d="M.75 0v97.5l28.5-29" />
  </svg>
)

export default memo(Down)
