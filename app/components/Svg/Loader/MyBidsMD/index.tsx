import { memo } from 'react'

const MyBidsMD = ({ classes, width = 1240, height = 120 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 1240 120"
    fill="none"
  >
    <rect width={140} height={80} y={20} fill="#202124" rx={4} />
    <path
      fill="#202124"
      d="M156 24h270v12H156zM156 48h213v16H156zM156 76h76v12h-76zM236 76h12v12h-12zM1137 24h103v16h-103z"
    />
    <rect width={87} height={30} x={1078} y={60} fill="#202124" rx={15} />
    <rect width={59} height={30} x={1181} y={60} fill="#202124" rx={15} />
  </svg>
)
export default memo(MyBidsMD)
