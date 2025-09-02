import { memo } from 'react'

const Link = ({ classes, width = 14, height = 14 }: SVGPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classes}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M1.604 12.757a.362.362 0 0 1-.257-.105.366.366 0 0 1 0-.513L11.521 1.966H4.304a.363.363 0 0 1-.362-.362c0-.198.163-.362.362-.362H12.4c.047 0 .094.012.135.03a.443.443 0 0 1 .122.081c.03.035.053.07.07.111.018.04.03.088.03.134v8.097a.363.363 0 0 1-.362.362.363.363 0 0 1-.362-.362V2.479L1.866 12.652a.362.362 0 0 1-.256.105h-.006Z"
    />
  </svg>
)

export default memo(Link)
