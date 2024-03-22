import type { SVGProps } from '@type'

import { memo } from 'react'

const SkeletonBoardMD = ({ css, width = 1104, height = 404 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={1104}
    height={404}
    viewBox="0 0 1104 404"
    fill="none"
  >
    <rect width={1103} height={403} x={0.5} y={0.5} fill="#212121" rx={19.5} />
    <rect
      width={1103}
      height={403}
      x={0.5}
      y={0.5}
      stroke="#80AB01"
      rx={19.5}
    />
    <g clipPath="url(#a)">
      <path className="animate-pulse" fill="#333" d="M20 20h500v282H20z" />
    </g>
    <path
      className="animate-pulse"
      fill="#333"
      d="M20 318h500v28H20zM20 362h219v22H20zM584 20h171v16H584V20ZM584 52h222v36H584V52ZM584 104h222v12H584v-12Z"
    />
    <rect
      className="animate-pulse"
      width={192}
      height={51}
      x={892}
      y={42.5}
      fill="#333"
      rx={25.5}
    />
    <g clipPath="url(#b)">
      <mask id="c" fill="#fff">
        <path d="M584 140h500v46H584v-46Z" />
      </mask>
      <path
        fill="#80AB01"
        fillOpacity={0.4}
        d="M584 186.5h1v-1h-1v1Zm3 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h1v-1h-1v1Zm-499 .5h1v-2h-1v2Zm3 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h1v-2h-1v2Z"
        mask="url(#c)"
      />
      <path
        className="animate-pulse"
        fill="#333"
        d="M584 156h200v14H584v-14ZM984 156h100v14H984v-14Z"
      />
      <mask id="d" fill="#fff">
        <path d="M584 186h500v46H584v-46Z" />
      </mask>
      <path
        fill="#80AB01"
        fillOpacity={0.4}
        d="M584 232.5h1v-1h-1v1Zm3 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h2v-1h-2v1Zm4 0h1v-1h-1v1Zm-499 .5h1v-2h-1v2Zm3 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h2v-2h-2v2Zm4 0h1v-2h-1v2Z"
        mask="url(#d)"
      />
      <path
        className="animate-pulse"
        fill="#333"
        d="M584 202h200v14H584v-14ZM984 202h100v14H984v-14ZM584 248h200v14H584v-14ZM984 248h100v14H984v-14Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={500} height={282} x={20} y={20} fill="#fff" rx={16} />
      </clipPath>
      <clipPath id="b">
        <rect width={500} height={138} x={584} y={140} fill="#fff" rx={20} />
      </clipPath>
    </defs>
  </svg>
)

export default memo(SkeletonBoardMD)
