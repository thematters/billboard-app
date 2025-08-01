import { memo } from 'react'

const BidMD = ({ classes, width = 440, height = 684 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 440 684"
    fill="none"
  >
    <path
      fill="#202124"
      d="M90.5 0h259v48h-259V0ZM64 88h80v14H64V88ZM180 88h80v14h-80V88ZM296 88h80v14h-80V88Z"
    />
    <rect width={440} height={462} y={142} fill="#202124" rx={8} />
    <path
      fill="#2F353B"
      d="M20 166h218v14H20zM20 188h169v14H20zM20 242h144v14H20zM20 264h124v14H20zM20 318h65v14H20z"
    />
    <rect width={400} height={46} x={20} y={344} fill="#2F353B" rx={8} />
    <path fill="#2F353B" d="M20 402h143v12H20z" />
    <mask id="a" fill="#fff">
      <path d="M20 450h400v134H20V450Z" />
    </mask>
    <path fill="#2F353B" d="M20 450v1h400v-2H20v1Z" mask="url(#a)" />
    <path
      fill="#2F353B"
      d="M20 470h92v14H20zM318 470h102v14H318zM20 500h92v14H20zM318 500h102v14H318zM20 530h92v14H20zM318 530h102v14H318zM346 564h74v12h-74z"
    />
    <rect width={280} height={48} x={80} y={636} fill="#202124" rx={12} />
  </svg>
)
export default memo(BidMD)
