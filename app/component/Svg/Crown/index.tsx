import type { SVGProps } from '@type'

import { memo } from 'react'

const Crown = ({ css, width = 12, height = 12 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      fill="#C3F432"
      d="M8.12 4.21 6.593 1.478a.749.749 0 0 0-1.314 0L3.754 4.21a.75.75 0 0 1-1.1.248L1.193 3.402C.664 3.02-.062 3.45.004 4.106L.417 8.22c.125 1.251 1.163 2.203 2.4 2.203h6.125c1.219 0 2.246-.924 2.394-2.154l.496-4.12c.08-.663-.652-1.106-1.187-.72L9.222 4.457a.752.752 0 0 1-1.1-.248l-.002.002Z"
    />
  </svg>
)

export default memo(Crown)
