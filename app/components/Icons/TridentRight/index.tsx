interface Props {
  className?: string
  width?: number
  height?: number
}

const TridentRight = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 29 40"
    fill="none"
  >
    <path
      stroke="#80AB01"
      d="m8 1 19.092 19.092M0 20.046h27M8 39.138l19.092-19.092"
    />
  </svg>
)
export default TridentRight
