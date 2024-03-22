import type { AppContext } from '@type'

import { NavLink, useOutletContext } from '@remix-run/react'
import clsx from 'clsx'
import { useAccount } from 'wagmi'

import ButtonBase from '@component/Button/Base'
import SvgClaimed from '@svg/Claimed'

type Props = {
  click: () => void
}

const Claimed = ({ click }: Props) => {
  const context = useOutletContext<AppContext>()
  const { address } = useAccount()

  const baseCss = clsx('lg:pb-20', 'max-limit')
  const contentCss = clsx('t-14 md:t-20', 'text-center')
  const svgCss = clsx('my-6 lg:my-10', 'mx-auto')
  const btnCss = clsx('px-28', 'mx-auto', 't-18', 'font-normal')

  return (
    <section className={baseCss}>
      <section className="section-title">ClAIM SUCCESSFULLY</section>
      <section className={contentCss}>
        You have successfully claimed the distributed funding. To get more
        details about the transaction, you can check your wallet and&nbsp;
        <NavLink
          className="text-grass"
          to={`${context.urlOpExplorer}/address/${address}`}
          target="_blank"
        >
          on-chain records
        </NavLink>
        .
      </section>
      <SvgClaimed css={svgCss} />
      <ButtonBase css={btnCss} color="dim" click={click}>
        Got it
      </ButtonBase>
    </section>
  )
}

export default Claimed
