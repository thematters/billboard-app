interface Props {
  className?: string
  width?: number
  height?: number
}

const Book = ({ className, width, height }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 896 271"
    fill="none"
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M448 241.186c189.434 0 343-45.372 343-101.341 0-55.969-153.566-101.34-343-101.34s-343 45.371-343 101.34 153.566 101.341 343 101.341Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M448 199.856c160.471 0 290.558-31.31 290.558-69.932 0-38.623-130.087-69.933-290.558-69.933-160.47 0-290.558 31.31-290.558 69.933 0 38.622 130.088 69.932 290.558 69.932Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M575.406 89.274c55.306 7.498 91.335 19.729 91.335 33.563 0 22.791-97.94 41.273-218.741 41.273-120.801 0-218.74-18.482-218.74-41.273 0-22.791 97.939-41.273 218.74-41.273 19.616 0 38.623.481 56.723 1.403"
    />
    <path
      fill="#fff"
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M313.819 139.136s67.806-18.425 109.434 5.67l48.771-42.521s-42.818-15.59-85.651-5.67l-72.568 42.521h.014ZM543.416 132.05l36.88-51.025s-64.235-17.008-108.258 21.26l-48.771 42.521s65.425-31.182 120.149-12.756Z"
    />
    <path
      fill="#333"
      d="M340 91a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM480 170a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM729 118a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM630 233a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM157 200a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM448 45a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM159 135a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
    />
  </svg>
)

export default Book
