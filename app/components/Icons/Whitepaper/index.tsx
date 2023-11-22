interface Props {
  className?: string
  width: number
  height: number
}

const Whitepaper = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8 16h4m-4-4h7M8 8h7M4 3h16v13.304C20 18.887 17.46 21 14.353 21H4V3Z"
    />
  </svg>
)

export default Whitepaper
