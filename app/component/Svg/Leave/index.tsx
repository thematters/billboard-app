import type { SVGProps } from '@type'

import { memo } from 'react'

const Leave = ({ css, width = 20, height = 20 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      fill="#fff"
      d="M11.074 17.991H2.708V3.2h8.366a.52.52 0 0 0 .517-.517.52.52 0 0 0-.517-.516H2.183a.52.52 0 0 0-.517.516v15.834a.52.52 0 0 0 .517.516h8.891a.52.52 0 0 0 .517-.517.52.52 0 0 0-.517-.516v-.009Z"
    />
    <path
      fill="#fff"
      d="M18.5 10.783a.486.486 0 0 0 0-.375c0-.025-.026-.041-.034-.058-.017-.025-.025-.05-.042-.075L14.258 5a.519.519 0 0 0-.734-.083.519.519 0 0 0-.083.733l3.5 4.433H5.583a.52.52 0 0 0-.517.517.52.52 0 0 0 .517.517h11.366l-3.5 4.433a.527.527 0 0 0 .084.733.526.526 0 0 0 .733-.091l4.167-5.276s.025-.05.041-.075l.034-.058h-.009Z"
    />
  </svg>
)

export default memo(Leave)
