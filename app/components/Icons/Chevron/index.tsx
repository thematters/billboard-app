interface Props {
  className?: string
  width: number
  height: number
}

const Chevron = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      stroke="#C3F432"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m8.25 4.5 7.5 7.5-7.5 7.5"
    />
  </svg>
)
export default Chevron
