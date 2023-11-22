interface Props {
  className?: string
  width: number
  height: number
}

const Linkedin = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <rect width={width} height={height} fill="#333" rx={20} />
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.825 16.862h3.142v1.565c.452-.9 1.613-1.708 3.356-1.708 3.342 0 4.135 1.791 4.135 5.078v6.087h-3.383v-5.338c0-1.872-.453-2.928-1.605-2.928-1.598 0-2.261 1.138-2.261 2.927v5.34h-3.384V16.861Zm-5.801 10.879h3.383V16.719h-3.383V27.74Zm3.868-14.616a2.14 2.14 0 0 1-.637 1.524 2.19 2.19 0 0 1-3.077 0 2.154 2.154 0 0 1-.637-1.524c0-.573.229-1.121.637-1.525a2.185 2.185 0 0 1 3.077 0c.407.404.637.952.637 1.525Z"
      clipRule="evenodd"
    />
  </svg>
)

export default Linkedin
