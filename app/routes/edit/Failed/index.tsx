import BaseButton from '@component/Button/Base'
import SvgErrorClaim from '@svg/ErrorClaim'

type Props = {
  retry: () => void
}

const Failed = ({ retry }: Props) => {
  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">UPDATE FAILED</h1>
      <p className={contentCss}>
        Please retry later. Check the wallet status and confirm your network.
      </p>
      <SvgErrorClaim css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={retry}>
        Retry
      </BaseButton>
    </section>
  )
}

export default Failed
