import type { SVGProps } from '@type'

import { memo } from 'react'

const SkeletonBidSM = ({ css, width = 311, height = 412 }: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={css}
    width={width}
    height={height}
    viewBox="0 0 311 412"
    fill="none"
  >
    <path
      fill="#333"
      d="M0 0h64v24H0V0ZM88 0h64v24H88V0ZM0 48h220v24H0V48ZM0 88h311v52H0z"
    />
    <path fill="#fff" fillOpacity={0.3} d="M16 108h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 104v20" />
    <path fill="#fff" fillOpacity={0.3} d="M75 108h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 104v20" />
    <path fill="#fff" fillOpacity={0.3} d="M134 108h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 104v20" />
    <path fill="#fff" fillOpacity={0.3} d="M193 108h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 104v20" />
    <path fill="#fff" fillOpacity={0.3} d="M252 108h36v12h-36v-12Z" />
    <mask id="a" fill="#fff">
      <path d="M0 140h311v52H0v-52Z" />
    </mask>
    <path fill="#212121" d="M0 140h311v52H0v-52Z" />
    <path
      fill="#80AB01"
      fillOpacity={0.4}
      d="M311 191H0v2h311v-2Z"
      mask="url(#a)"
    />
    <path className="animate-pulse" fill="#333" d="M16 160h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 156v20" />
    <path className="animate-pulse" fill="#333" d="M75 160h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 156v20" />
    <path className="animate-pulse" fill="#333" d="M134 160h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 156v20" />
    <path className="animate-pulse" fill="#333" d="M193 160h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 156v20" />
    <path className="animate-pulse" fill="#333" d="M252 160h36v12h-36v-12Z" />
    <mask id="b" fill="#fff">
      <path d="M0 192h311v52H0v-52Z" />
    </mask>
    <path fill="#212121" d="M0 192h311v52H0v-52Z" />
    <path fill="#80AB01" fillOpacity={0.4} d="M311 243H0v2h311v-2Z" />
    <path className="animate-pulse" fill="#333" d="M16 212h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 208v20" />
    <path className="animate-pulse" fill="#333" d="M75 212h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 208v20" />
    <path className="animate-pulse" fill="#333" d="M134 212h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 208v20" />
    <path className="animate-pulse" fill="#333" d="M193 212h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 208v20" />
    <path className="animate-pulse" fill="#333" d="M252 212h36v12h-36v-12Z" />
    <mask id="c" fill="#fff">
      <path d="M0 244h311v52H0v-52Z" />
    </mask>
    <path fill="#212121" d="M0 244h311v52H0v-52Z" />
    <path fill="#80AB01" fillOpacity={0.4} d="M311 295H0v2h311v-2Z" />
    <path className="animate-pulse" fill="#333" d="M16 264h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 260v20" />
    <path className="animate-pulse" fill="#333" d="M75 264h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 260v20" />
    <path className="animate-pulse" fill="#333" d="M134 264h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 260v20" />
    <path className="animate-pulse" fill="#333" d="M193 264h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 260v20" />
    <path className="animate-pulse" fill="#333" d="M252 264h36v12h-36v-12Z" />
    <mask id="d" fill="#fff">
      <path d="M0 296h311v52H0v-52Z" />
    </mask>
    <path fill="#212121" d="M0 296h311v52H0v-52Z" />
    <path fill="#80AB01" fillOpacity={0.4} d="M311 347H0v2h311v-2Z" />
    <path className="animate-pulse" fill="#333" d="M16 316h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 312v20" />
    <path className="animate-pulse" fill="#333" d="M75 316h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 312v20" />
    <path className="animate-pulse" fill="#333" d="M134 316h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 312v20" />
    <path className="animate-pulse" fill="#333" d="M193 316h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 312v20" />
    <path className="animate-pulse" fill="#333" d="M252 316h36v12h-36v-12Z" />
    <mask id="e" fill="#fff">
      <path d="M0 348h311v52H0v-52Z" />
    </mask>
    <path fill="#212121" d="M0 348h311v52H0v-52Z" />
    <path
      fill="#80AB01"
      fillOpacity={0.4}
      d="M311 399H0v2h311v-2Z"
      mask="url(#e)"
    />
    <path className="animate-pulse" fill="#333" d="M16 368h36v12H16v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M67 364v20" />
    <path className="animate-pulse" fill="#333" d="M75 368h36v12H75v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M126 364v20" />
    <path className="animate-pulse" fill="#333" d="M134 368h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M185 364v20" />
    <path className="animate-pulse" fill="#333" d="M193 368h36v12h-36v-12Z" />
    <path stroke="#80AB01" strokeDasharray="2 2" d="M244 364v20" />
    <path className="animate-pulse" fill="#333" d="M252 368h36v12h-36v-12Z" />
  </svg>
)

export default memo(SkeletonBidSM)
