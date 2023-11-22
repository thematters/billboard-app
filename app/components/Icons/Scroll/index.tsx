import type React from 'react'

interface Props {
  className?: React.ReactNode
  width?: number
  height?: number
}

const Scroll = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M6.667 13.333H10M6.667 10H12.5M6.667 6.667H12.5M3.334 2.5h13.333v11.087c0 2.152-2.118 3.913-4.706 3.913H3.333v-15Z"
    />
  </svg>
)

export default Scroll
