import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgClaim from '@svg/Claim'

type Props = {
  openModal: () => void
}

const Greet = ({ openModal }: Props) => {
  const baseCss = clsx('lg:pb-20', 'max-limit')
  const contentCss = clsx('t-14 md:t-20')
  const svgCss = clsx('my-6 lg:my-10', 'mx-auto')
  const btnCss = clsx('px-28', 'mx-auto', 't-18', 'font-normal')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <section className={contentCss}>
        The tax revenue from billboards is periodically distributed to creators
        through the quadratic funding mechanism. Connect your wallet to check
        your eligibility for claiming funding.
      </section>
      <SvgClaim css={svgCss} />
      <ButtonBase css={btnCss} color="dim" click={openModal}>
        Connect
      </ButtonBase>
    </section>
  )
}

export default Greet
