import { memo } from 'react'

const DistSM = ({ classes, width = 343, height = 441 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 343 441"
    fill="none"
  >
    <path fill="#202124" d="M0 5h343v28H0zM112 43h119v28H112z" />
    <rect width={306} height={325} x={19} y={116} fill="#202124" rx={20} />
    <g clipPath="url(#a)">
      <path fill="#2F353B" d="M35 132h274v153H35z" />
    </g>
    <rect width={274} height={153} x={35} y={132} stroke="#2F353B" rx={12} />
    <path fill="#2F353B" d="M35 305h177v14H35zM35 327h72v20H35z" />
    <rect width={274} height={58} x={35} y={367} fill="#202124" rx={12} />
    <path
      fill="#2F353B"
      d="M51 379h43v12H51zM51 399h17v14H51zM127 379h43v12h-43zM127 399h17v14h-17zM203 379h43v12h-43zM203 399h90v14h-90z"
    />
    <defs>
      <clipPath id="a">
        <rect width={274} height={153} x={35} y={132} fill="#fff" rx={12} />
      </clipPath>
    </defs>
  </svg>
)

export default memo(DistSM)
