import { NavLink } from '@remix-run/react'
import { useAccount } from 'wagmi'

import ButtonLink from '@component/Button/Link'
import useEnvs from '@hook/useEnvs'
import SvgClaimed from '@svg/Claimed'

type Props = {
  click: () => void
}

const Claimed = ({ click }: Props) => {
  const envs = useEnvs()
  const { address } = useAccount()

  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const svgCss = 'my-6 lg:my-10 mx-auto'
  const btnCss = 'px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">ClAIM SUCCESSFULLY</h1>
      <div className={contentCss}>
        You have successfully claimed the creator rewards. To get more details
        about the transaction, you can check your wallet and&nbsp;
        <NavLink
          className="text-grass"
          to={`${envs.urlOpExplorer}/address/${address}`}
          target="_blank"
        >
          on-chain records
        </NavLink>
        .
      </div>
      <SvgClaimed css={svgCss} />
      <ButtonLink css={btnCss} color="dim" to="/" click={click}>
        Got it
      </ButtonLink>
    </section>
  )
}

export default Claimed
