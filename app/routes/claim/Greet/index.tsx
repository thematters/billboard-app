import { NavLink } from '@remix-run/react'

import BaseButton from '@component/Button/Base'
import SvgClaim from '@svg/Claim'

type Props = {
  open: () => void
}

const Greet = ({ open }: Props) => {
  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">CREATOR REWARDS</h1>
      <p className={contentCss}>
        The tax revenue from billboards is periodically distributed to creators
        through the quadratic funding mechanism. Connect your wallet to check
        your eligibility for claiming rewards. If you're claiming rewards for
        the first time, please follow our
        <NavLink
          className="text-grass"
          to="https://matters.town/a/bnrzg4x1iren"
          target="_blank"
        >
          &nbsp;step-by-step guide&nbsp;
        </NavLink>
        to get started.
      </p>
      <SvgClaim css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={open}>
        Connect
      </BaseButton>
    </section>
  )
}

export default Greet
