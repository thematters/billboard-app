import clsx from 'clsx'
import { memo, useId } from 'react'

const Spinner = ({ classes, width = 24, height = 24 }: SVGPropsType) => {
  const id = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={clsx('animate-spin', classes)}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <defs>
        <radialGradient
          id={id}
          cx={0}
          cy={0}
          r={1.15}
          gradientTransform="matrix(2.5 -9 9.20046 2.55568 12 12.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="cuurentColor" />
          <stop offset={0.823} stopColor="currentColor" stopOpacity={0} />
          <stop offset={1} stopColor="currentColor" stopOpacity={0} />
        </radialGradient>
      </defs>
      <path
        fill={`url(#${id})`}
        fillRule="evenodd"
        d="M12 5.25A6.75 6.75 0 1 0 18.75 12a1.25 1.25 0 1 1 2.5 0A9.25 9.25 0 1 1 12 2.75a1.25 1.25 0 1 1 0 2.5Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default memo(Spinner)
