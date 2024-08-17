import { NavLink, useNavigate, useSearchParams } from '@remix-run/react'

import BaseButton from '@component/Button/Base'
import useEnvs from '@hook/useEnvs'
import SvgRefundSuccess from '@svg/RefundSuccess'

type Props = {
  address?: `0x${string}`
  setParentStep: (value: string) => void
}

const Retracted = ({ address, setParentStep }: Props) => {
  const envs = useEnvs()

  const click = () => {
    setParentStep('bids')
  }

  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">RETRACT SUCCESSFULLY</h1>
      <p className={contentCss}>
        You have successfully processed the bids retraction.
        <br />
        To get more details, you can check your wallet and&nbsp;
        <NavLink
          className="text-grass"
          to={`${envs.urlOpExplorer}/address/${address}`}
          target="_blank"
        >
          on-chain records
        </NavLink>
        .
      </p>
      <SvgRefundSuccess css={svgCss} />
      <BaseButton css={btnCss} color="dim" click={click}>
        Back
      </BaseButton>
    </section>
  )
}

export default Retracted
