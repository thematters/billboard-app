import { memo } from 'react'

const EditSM = ({ classes, width = 343, height = 618 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 343 618"
    fill="none"
  >
    <path fill="#202124" d="M127.5 5h88v28h-88zM73.5 62h80v14h-80z" />
    <path stroke="#202124" d="M161.5 69h20" />
    <path fill="#202124" d="M189.5 62h80v14h-80z" />
    <rect width={343} height={377.862} y={100} fill="#202124" rx={8} />
    <rect width={311} height={169.862} x={16} y={116} fill="#2F353B" rx={8} />
    <rect width={311} height={169.862} x={16} y={116} stroke="#2F353B" rx={8} />
    <rect
      width={82}
      height={32}
      x={238.777}
      y={247.617}
      fill="#121316"
      fillOpacity={0.7}
      rx={16}
    />
    <path
      fill="#2F353B"
      d="M16 295.862h311v12H16zM16 317.862h311v12H16zM16 339.862h81v12H16zM16 389.862h164v14H16z"
    />
    <rect width={311} height={46} x={16} y={415.862} fill="#2F353B" rx={8} />
    <rect width={343} height={48} y={509.862} fill="#202124" rx={12} />
    <rect width={343} height={48} y={569.862} fill="#202124" rx={12} />
  </svg>
)

export default memo(EditSM)
