interface Props {
  className?: string
  width: number
  height: number
}

const RedirectLink = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3.75 16.75 12.5-12.5m0 0H6.875m9.375 0v9.375"
    />
  </svg>
)

export default RedirectLink
