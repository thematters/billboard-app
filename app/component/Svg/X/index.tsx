import type { SVGProps } from '@type'

import { memo } from 'react'

const X = ({ css, width = 40, height = 40 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="#333"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
    />
    <path
      fill="#fff"
      d="M31.25 13.22c-.8.355-1.661.595-2.565.703a4.479 4.479 0 0 0 1.964-2.472 8.921 8.921 0 0 1-2.837 1.083 4.47 4.47 0 0 0-7.613 4.076 12.686 12.686 0 0 1-9.208-4.668 4.468 4.468 0 0 0 1.383 5.965 4.457 4.457 0 0 1-2.023-.56v.058a4.469 4.469 0 0 0 3.583 4.38 4.5 4.5 0 0 1-2.017.077 4.47 4.47 0 0 0 4.173 3.102 8.964 8.964 0 0 1-5.549 1.913c-.356 0-.712-.02-1.066-.062a12.634 12.634 0 0 0 6.847 2.007c8.219 0 12.712-6.807 12.712-12.71 0-.192-.005-.386-.014-.578a9.08 9.08 0 0 0 2.228-2.311l.002-.003Z"
    />
  </svg>
)

export default memo(X)
