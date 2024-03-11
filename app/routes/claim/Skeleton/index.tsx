import clsx from 'clsx'
import _ from 'lodash'
import { useEffect, useState } from 'react'

import { BREAKPOINTS } from '@constants'
import SvgSkeletonClaimMD from '@svgs/SkeletonClaimMD'
import SvgSkeletonClaimSM from '@svgs/SkeletonClaimSM'

const Skeleton = () => {
  const baseCss = clsx('md:px-10', 'lg:px-20')

  const skeletonCss = clsx('w-full')
  const skeletonSMCss = clsx(skeletonCss, 'md-hidden')
  const skeletonMDCss = clsx(skeletonCss, 'md-shown')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <SvgSkeletonClaimSM css={skeletonSMCss} />
      <SvgSkeletonClaimMD css={skeletonMDCss} />
    </section>
  )
}

export default Skeleton
