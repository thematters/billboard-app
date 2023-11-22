import type React from 'react'

interface Props {
  className?: string
  width?: number
  height?: number
}

const Exclamation = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      stroke="#333"
      strokeMiterlimit={10}
      strokeWidth={1.25}
      d="M7.199 9.917V6.271h-.73m-.264 3.52h2.029m4.6-2.79A5.833 5.833 0 1 1 1.166 7a5.833 5.833 0 0 1 11.666 0ZM7.291 4.316a.233.233 0 1 1-.467 0 .233.233 0 0 1 .467 0Z"
    />
  </svg>
)

export default Exclamation
