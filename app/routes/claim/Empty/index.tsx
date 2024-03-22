import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgClaimEmpty from '@svg/ClaimEmpty'

type Props = {
  click: () => void
}

const Empty = ({ click }: Props) => {
  const baseCss = clsx('lg:pb-20', 'max-limit')
  const contentCss = clsx('t-14 md:t-20', 'text-center')
  const svgCss = clsx('my-6 lg:my-10', 'mx-auto')
  const btnCss = clsx('px-28', 'mx-auto', 't-18', 'font-normal')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <section className={contentCss}>
        There appears to be no new funding available to claim. Consider changing
        your wallet address and try again. The upcoming distribution round will
        commence shortly, so we invite you to come back later.
      </section>
      <SvgClaimEmpty css={svgCss} />
      <ButtonBase css={btnCss} color="dim" click={click}>
        Back
      </ButtonBase>
    </section>
  )
}

export default Empty
