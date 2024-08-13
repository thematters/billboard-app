import clsx from 'clsx'

import SvgLoaderClaimMD from '@svg/Loader/ClaimMD'
import SvgLoaderClaimSM from '@svg/Loader/ClaimSM'

const Loader = () => {
  const baseCss = 'md:px-10 lg:px-20'
  const loaderSMCss = 'w-full md-hidden'
  const loaderMDCss = 'w-full md-shown'

  return (
    <section className={baseCss}>
      <h1 className="section-title">CLAIM FUNDING</h1>
      <SvgLoaderClaimSM css={loaderSMCss} />
      <SvgLoaderClaimMD css={loaderMDCss} />
    </section>
  )
}

export default Loader
