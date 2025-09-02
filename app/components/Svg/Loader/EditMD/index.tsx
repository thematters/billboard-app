import { memo } from 'react'

const EditMD = ({ classes, width = 440, height = 661 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 440 661"
    fill="none"
  >
    <path fill="#202124" d="M176 5h88v48h-88zM122 102h80v14h-80z" />
    <path stroke="#202124" d="M210 109h20" />
    <path fill="#202124" d="M238 102h80v14h-80z" />
    <rect width={440} height={420.24} y={160} fill="#202124" rx={8} />
    <rect width={400} height={224.24} x={20} y={180} fill="#2F353B" rx={20} />
    <rect width={400} height={224.24} x={20} y={180} stroke="#2F353B" rx={20} />
    <rect
      width={82}
      height={32}
      x={330}
      y={364}
      fill="#121316"
      fillOpacity={0.7}
      rx={16}
    />
    <path
      fill="#2F353B"
      d="M20 415.24h400v12H20zM20 437.24h300v12H20zM20 488.24h164v14H20z"
    />
    <rect width={400} height={46} x={20} y={514.24} fill="#2F353B" rx={8} />
    <rect width={200} height={48} y={612.24} fill="#202124" rx={12} />
    <rect width={200} height={48} x={240} y={612.24} fill="#202124" rx={12} />
  </svg>
)

export default memo(EditMD)
