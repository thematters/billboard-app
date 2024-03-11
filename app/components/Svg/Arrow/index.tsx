import type { SVGProps } from '@types'

import { memo } from 'react'

const Arrow = ({ css, width, height }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 45 30"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M45 17.403v-4.808S28.018 9.37 25.894 0h-4.948s2.612 9.857 15.601 13.379C22.046 13.379 0 9.993 0 9.993v10.014s22.046-3.386 36.547-3.386C23.56 20.144 20.947 30 20.947 30h4.947C28.018 20.63 45 17.405 45 17.405v-.002Z"
    />
  </svg>
)

export default memo(Arrow)
