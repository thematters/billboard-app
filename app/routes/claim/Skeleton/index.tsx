import clsx from 'clsx'

import SvgSkeletonClaimMD from '@svg/SkeletonClaimMD'
import SvgSkeletonClaimSM from '@svg/SkeletonClaimSM'

const Skeleton = () => {
  const baseCss = clsx('md:px-10', 'lg:px-20')
  const skeletonSMCss = clsx('w-full', 'md-hidden')
  const skeletonMDCss = clsx('w-full', 'md-shown')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <SvgSkeletonClaimSM css={skeletonSMCss} />
      <SvgSkeletonClaimMD css={skeletonMDCss} />
    </section>
  )
}

export default Skeleton
