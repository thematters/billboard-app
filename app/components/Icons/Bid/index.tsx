interface Props {
  className?: string
  width?: number
  height?: number
}

const Bid = ({ className, width, height }: Props) => (
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
      strokeWidth={1.25}
      d="M13 6V4.5a1.5 1.5 0 1 0-3 0V12m3-1V5.5a1.5 1.5 0 1 1 3 0V10m-6-3V5.5a1.5 1.5 0 0 0-3 0v6m0 0V14m0-2.5a1.5 1.5 0 0 0-3 0v2C4 16 5.5 21 11.5 21c2.5 0 7.5-1.5 7.5-7.5v-4a1.5 1.5 0 1 0-3 0V12"
    />
  </svg>
)
export default Bid
