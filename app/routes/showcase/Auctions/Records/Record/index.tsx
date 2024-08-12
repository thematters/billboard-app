import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgLink from '@svg/Link'

type Props = {
  auction: Record<string, any>
}

const Record = ({ auction }: Props) => {
  const rowBaseCss = 'px-2 py-4 md:px-4 cols-4 gap-x-4 t-12 md:t-14'
  const borderCss = 'tab-border after:-right-2 after:border-green'
  const cellCss = clsx('relative', borderCss)
  const rowCss = clsx(rowBaseCss, 'border-b border-green/40')
  const linkCss = 'w-fit f-center-start hover:text-grass'
  const svgLinkCss = 'ml-1 md-shown'

  return (
    <section className={rowCss}>
      <div className={cellCss}>{auction.price} USDT</div>
      <div className={cellCss}>{auction.bidder}</div>
      <div className={cellCss}>{auction.endAt}</div>
      <div>
        <NavLink className={linkCss} to={auction.link} target="_blank">
          {auction.txHash}
          <SvgLink css={svgLinkCss} width={12} height={12} />
        </NavLink>
      </div>
    </section>
  )
}

export default Record
