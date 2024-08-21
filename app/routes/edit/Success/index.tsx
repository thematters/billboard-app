import { useNavigate, useSearchParams } from '@remix-run/react'

import BaseButton from '@component/Button/Base'
import SvgEditSuccess from '@svg/EditSuccess'

const Success = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const click = () => {
    navigate('/mybids')
  }

  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">EDIT SUCCESSFULLY</h1>
      <p className={contentCss}>
        Your advertisement content has been edited successfully.
      </p>
      <SvgEditSuccess css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={click}>
        Back
      </BaseButton>
    </section>
  )
}

export default Success
