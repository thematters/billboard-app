import { memo } from 'react'

const EmptyBox = ({ classes, width = 272, height = 206 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 272 206"
    fill="none"
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M211 79H61v90h150V79Z"
    />
    <path
      fill="#202124"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M85.447 46 70 79h132l-14.043-33H85.447Z"
    />
    <path
      fill="#333"
      stroke="#fff"
      strokeWidth={1.5}
      d="m44.5 38 26 41H62L36 38h8.5ZM210.5 79l26-41H228l-26 41h8.5Z"
    />
    <path
      fill="#202124"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M61.5 79 39.04 126.022h191.917L210.541 79H61.499Z"
    />
  </svg>
)
export default memo(EmptyBox)
