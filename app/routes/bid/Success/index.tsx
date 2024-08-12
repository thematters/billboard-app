import { useNavigate, useSearchParams } from '@remix-run/react'

import BaseButton from '@component/Button/Base'
import SvgBidSuccess from '@svg/BidSuccess'

const Success = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const click = () => {
    const from = searchParams.get('from') || 'showcase'
    navigate(`/${from}`)
  }

  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">BID SUCCESSFULLY</h1>
      <p className={contentCss}>
        Your bid has been placed successfully. Head over to see the latest
        auction status.
      </p>
      <SvgBidSuccess css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={click}>
        Back
      </BaseButton>
    </section>
  )
}

export default Success
