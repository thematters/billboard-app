import { memo, useId } from 'react'

const BoardSM = ({ classes, width = 343, height = 727 }: SVGPropsType) => {
  const id = useId()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes}
      width={width}
      height={height}
      viewBox="0 0 343 727"
      fill="none"
    >
      <rect width={343} height={194} x={0} y={1} fill="#202124" rx={20} />
      <path
        fill="#202124"
        d="M1 205h16v16H1zM25 207h64v12H25zM1 251h55v14H1zM64 251h72v14H64zM1 274h306v28H1zM1 335h86v14H1zM1 357h193v20H1zM1 385h103v12H1z"
      />
      <rect width={343} height={48} x={0} y={425} fill="#202124" rx={12} />
      <g clipPath={`url(#${id})`}>
        <mask id="b" fill="#fff">
          <path d="M1 497h343v48H1v-48Z" />
        </mask>
        <path fill="#2F353B" d="M344 544H1v2h343v-2Z" mask="url(#b)" />
        <path
          fill="#202124"
          d="M5 511h78v20H5zM115 511h78v20h-78zM1 569h356v14H1z"
        />
        <circle cx={21} cy={631} r={20} fill="#202124" />
        <path
          fill="#202124"
          d="M49 615h90v14H49zM49 635h70v12H49zM127 635h42v12h-42zM177 635h12v12h-12zM233 615h111v14H233zM252 635h92v12h-92z"
        />
        <circle cx={21} cy={695} r={20} fill="#202124" />
        <path
          fill="#202124"
          d="M49 679h90v14H49zM49 699h70v12H49zM127 699h42v12h-42zM177 699h12v12h-12zM233 679h111v14H233zM252 699h92v12h-92z"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <path fill="#fff" d="M1 497h343v230H1z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default memo(BoardSM)
