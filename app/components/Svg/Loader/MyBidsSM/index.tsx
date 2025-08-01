import { memo } from 'react'

const MyBidsSM = ({ classes, width = 375, height = 358 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 375 358"
    fill="none"
  >
    <rect width={140} height={80} x={16} y={20} fill="#202124" rx={4} />
    <path
      fill="#202124"
      d="M16 120h270v12H16zM16 144h213v16H16zM16 172h76v12H16zM96 172h12v12H96zM16 208h103v16H16z"
    />
    <rect width={87} height={30} x={197} y={204} fill="#202124" rx={15} />
    <rect width={59} height={30} x={300} y={204} fill="#202124" rx={15} />
  </svg>
)
export default memo(MyBidsSM)
