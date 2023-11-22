interface Props {
  className?: string
  width: number
  height: number
}

const Facebook = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="#333"
      d="M40 20c0 11.046-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0s20 8.954 20 20Z"
    />
    <path
      fill="#fff"
      d="M17.05 30h4.211v-8.432h3.794l.417-4.19h-4.21v-2.115a1.053 1.053 0 0 1 1.052-1.053h3.158V10h-3.158a5.263 5.263 0 0 0-5.264 5.263v2.116h-2.105l-.417 4.19h2.522V30Z"
    />
  </svg>
)
export default Facebook
