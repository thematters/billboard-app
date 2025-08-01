import { memo } from 'react'

const Linkedin = ({ classes, width = 40, height = 40 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M17.825 16.862h3.141v1.565c.453-.9 1.613-1.708 3.356-1.708 3.342 0 4.136 1.791 4.136 5.078v6.087h-3.384v-5.338c0-1.872-.452-2.928-1.604-2.928-1.598 0-2.262 1.138-2.262 2.927v5.34h-3.383V16.861Zm-5.802 10.879h3.383V16.719h-3.383V27.74Zm3.868-14.616a2.14 2.14 0 0 1-.637 1.524 2.19 2.19 0 0 1-3.077 0 2.156 2.156 0 0 1-.636-1.524c0-.573.228-1.121.637-1.525a2.185 2.185 0 0 1 3.076 0c.408.404.637.952.637 1.525Z"
      clipRule="evenodd"
    />
  </svg>
)

export default memo(Linkedin)
