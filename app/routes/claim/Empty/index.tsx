import ButtonBase from '@component/Button/Base'
import SvgClaimEmpty from '@svg/ClaimEmpty'

type Props = {
  click: () => void
}

const Empty = ({ click }: Props) => {
  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">CREATOR REWARDS</h1>
      <p className={contentCss}>
        There appear to be no new rewards available to claim. Consider changing
        your wallet address and try again. The upcoming distribution round will
        commence shortly, so we invite you to come back later.
      </p>
      <SvgClaimEmpty css={svgCss} />
      <ButtonBase css={btnCss} color="dim" click={click}>
        Back
      </ButtonBase>
    </section>
  )
}

export default Empty
