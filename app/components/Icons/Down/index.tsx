interface Props {
  className?: string
  width?: number
  height?: number
}

const Down = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 30 100"
    fill="none"
  >
    <path stroke="#80AB01" d="M1 .5V98l28.5-29" />
  </svg>
)

export default Down
