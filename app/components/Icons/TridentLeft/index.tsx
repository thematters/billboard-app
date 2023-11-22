interface Props {
  className?: string
  width?: number
  height?: number
}

const TridentLeft = ({ className, width, height }: Props) => (
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
      d="M20.092 1 1 20.092M28.092 20.046h-27M20.092 39.138 1 20.046"
    />
  </svg>
)
export default TridentLeft
