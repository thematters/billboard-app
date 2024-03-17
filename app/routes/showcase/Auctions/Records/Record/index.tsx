import { NavLink, useOutletContext } from '@remix-run/react'
import clsx from 'clsx'

import ButtonLink from '@component/Button/Link'
import SvgLink from '@svg/Link'
import { formatDate, shortenAddress } from '@util/web3'

type Props = {
  auction: Record<string, any>[]
}

const Record = ({ auction }: Props) => {
  const rowBaseCss = clsx(
    'px-2 py-4',
    'md:px-4',
    'grid grid-cols-4',
    'gap-x-4',
    't-12 md:t-14'
  )
  const borderCss = clsx('tab-border', 'after:-right-2', 'after:border-green')
  const cellCss = clsx('relative', borderCss)
  const rowCss = clsx(rowBaseCss, 'border-b border-green/40')
  const linkCss = clsx('w-fit', 'f-center-start', 'hover:text-grass')
  const svgLinkCss = clsx('ml-1', 'md-shown')

  return (
    <section className={rowCss}>
      <section className={cellCss}>{auction.price}</section>
      <section className={cellCss}>{auction.to}</section>
      <section className={cellCss}>{auction.endAt}</section>
      <section>
        <NavLink className={linkCss} to={auction.link} target="_blank">
          {auction.txHash}
          <SvgLink css={svgLinkCss} width={12} height={12} />
        </NavLink>
      </section>
    </section>
  )
}

export default Record
