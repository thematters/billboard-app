import type { SVGProps } from '@type'

import { memo } from 'react'

const Camera = ({ css, width = 48, height = 48 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.3}
      strokeWidth={2}
      d="M13.654 12.437a4.621 4.621 0 0 1-3.282 2.11c-.759.108-1.515.225-2.268.35-2.106.351-3.604 2.204-3.604 4.338v16.852a4.5 4.5 0 0 0 4.5 4.5h30a4.5 4.5 0 0 0 4.5-4.5V19.235c0-2.134-1.498-3.987-3.604-4.338a95.525 95.525 0 0 0-2.268-.35 4.621 4.621 0 0 1-3.282-2.11l-1.642-2.632c-.757-1.213-2.045-2-3.473-2.077a97.547 97.547 0 0 0-10.462 0c-1.428.076-2.716.864-3.473 2.077l-1.642 2.632Z"
    />
    <path
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.3}
      strokeWidth={2}
      d="M33 25.587a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM37.5 21.087h.015v.015H37.5v-.015Z"
    />
  </svg>
)

export default memo(Camera)
