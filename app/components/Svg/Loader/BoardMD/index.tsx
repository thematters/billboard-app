import { memo, useId } from 'react'

const BoardMD = ({ classes, width = 1240, height = 480 }: SVGPropsType) => {
  const id = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      width={width}
      height={height}
      viewBox="0 0 1240 480"
      fill="none"
    >
      <rect width={520} height={294} x={0.5} fill="#202124" rx={20} />
      <path
        fill="#202124"
        d="M.5 304h16v16H.5zM24.5 306h64v12h-64zM584.5 4h55v14h-55zM647.5 4h72v14h-72zM584.5 27h306v28h-306zM584.5 88h86v14h-86zM584.5 110h193v20h-193zM584.5 138h103v12h-103z"
      />
      <rect width={280} height={48} x={584.5} y={178} fill="#202124" rx={12} />
      <g clipPath={`url(#${id})`}>
        <mask id="b" fill="#fff">
          <path d="M584.5 250h655v48h-655v-48Z" />
        </mask>
        <path fill="#2F353B" d="M1239.5 297h-655v2h655v-2Z" mask="url(#b)" />
        <path
          fill="#202124"
          d="M588.5 264h78v20h-78zM698.5 264h78v20h-78zM584.5 322h356v14h-356zM1152.5 322h14v14h-14zM1170.5 322h69v14h-69z"
        />
        <circle cx={604.5} cy={384} r={20} fill="#202124" />
        <path
          fill="#202124"
          d="M632.5 368h90v14h-90zM632.5 388h70v12h-70zM710.5 388h42v12h-42zM760.5 388h12v12h-12zM1128.5 368h111v14h-111zM1147.5 388h92v12h-92z"
        />
        <circle cx={604.5} cy={448} r={20} fill="#202124" />
        <path
          fill="#202124"
          d="M632.5 432h90v14h-90zM632.5 452h70v12h-70zM710.5 452h42v12h-42zM760.5 452h12v12h-12zM1128.5 432h111v14h-111zM1147.5 452h92v12h-92z"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <path fill="#fff" d="M584.5 250h655v230h-655z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(BoardMD)
