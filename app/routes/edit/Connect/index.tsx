import BaseButton from '@component/Button/Base'
import SvgWallet from '@svg/Wallet'

type Props = {
  open: () => void
}

const Connect = ({ open }: Props) => {
  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">EDIT</h1>
      <p className={contentCss}>
        To continue editting, you have to connect your wallet first.
      </p>
      <SvgWallet css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={open}>
        Connect
      </BaseButton>
    </section>
  )
}

export default Connect
