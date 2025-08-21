import { memo } from 'react'

const BidSM = ({ classes, width = 343, height = 634 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 343 634"
    fill="none"
  >
    <path fill="#202124" d="M127.5 5h88v28h-88zM45.5 62h60v14h-60z" />
    <path stroke="#202124" d="M113.5 69h20" />
    <path fill="#202124" d="M141.5 62h60v14h-60z" />
    <path stroke="#202124" d="M209.5 69h20" />
    <path fill="#202124" d="M237.5 62h60v14h-60z" />
    <rect width={343} height={454} y={100} fill="#202124" rx={8} />
    <path
      fill="#2F353B"
      d="M16 120h218v14H16zM16 142h169v14H16zM16 196h144v14H16zM16 218h124v14H16zM16 272h65v14H16z"
    />
    <rect width={311} height={46} x={16} y={298} fill="#2F353B" rx={8} />
    <path fill="#2F353B" d="M16 356h143v12H16z" />
    <mask id="a" fill="#fff">
      <path d="M16 404h311v134H16V404Z" />
    </mask>
    <path fill="#2F353B" d="M16 404v1h311v-2H16v1Z" mask="url(#a)" />
    <path
      fill="#2F353B"
      d="M16 424h92v14H16zM225 424h102v14H225zM16 454h92v14H16zM225 454h102v14H225zM16 484h92v14H16zM225 484h102v14H225zM253 518h74v12h-74z"
    />
    <rect width={343} height={48} y={586} fill="#202124" rx={12} />
  </svg>
)
export default memo(BidSM)
