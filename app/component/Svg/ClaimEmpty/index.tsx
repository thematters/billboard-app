import type { SVGProps } from '@type'

import { memo } from 'react'

const ClaimEmpty = ({ css, width = 272, height = 206 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 272 206"
    fill="none"
  >
    <path
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M211 79H61v90h150V79Z"
    />
    <path
      fill="#333"
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M85.447 46 70 79h132l-14.043-33H85.447Z"
    />
    <path
      fill="#333"
      stroke="#EDE8D6"
      strokeWidth={1.5}
      d="m44.5 38 26 41H62L36 38h8.5ZM210.5 79l26-41H228l-26 41h8.5Z"
    />
    <path
      fill="#333"
      stroke="#EDE8D6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m61.501 79-22.458 47.022H230.96L210.543 79H61.501Z"
    />
  </svg>
)

export default memo(ClaimEmpty)
