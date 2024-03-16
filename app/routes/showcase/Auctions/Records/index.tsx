import { NavLink, useOutletContext } from '@remix-run/react'
import clsx from 'clsx'

import SvgLink from '@svg/Link'
import { formatDate, shortenAddress } from '@util/web3'

type Props = {
  data: Record<string, any>[]
}

const Records = ({ data }: Props) => {
  const context = useOutletContext()
  const auctions = (data?.auctions || []).map((auction) => ({
    ...auction,
    price: (auction?.price || 0).toFixed(2),
    endAt: formatDate(auction.endAt),
    txHash: shortenAddress(auction.txHash),
    link: `${context.urlOpExplorer}/tx/${auction.txHash}`,
  }))

  const isEmpty = !auctions || auctions.length == 0

  const baseCss = clsx('bg-dim', 'grid grid-cols-1')
  const rowBaseCss = clsx(
    'px-2 py-4',
    'md:px-4',
    'grid grid-cols-4',
    'gap-x-4',
    't-12 md:t-14'
  )
  const borderCss = clsx('tab-border', 'after:-right-2', 'after:border-green')
  const cellCss = clsx('relative', borderCss)
  const headCss = clsx(rowBaseCss, 'md:font-meduim', 'bg-black')
  const rowsCss = clsx('max-h-[324px]', 'overflow-y-scroll')
  const rowCss = clsx(rowBaseCss, 'border-b border-green/40')
  const emptyRowCss = clsx('col-span-4', 'text-center')
  const linkCss = clsx('w-fit', 'f-center-start', 'hover:text-grass')
  const svgLinkCss = clsx('ml-1', 'md-shown')

  return (
    <section className={baseCss}>
      <section className={headCss}>
        <section className={cellCss}>Price</section>
        <section className={cellCss}>To</section>
        <section className={cellCss}>Date</section>
        <section>TxHash</section>
      </section>
      {isEmpty && (
        <section className={rowBaseCss}>
          <section className={emptyRowCss}>No auction data available</section>
        </section>
      )}
      <section className={rowsCss}>
        {auctions.map((auction) => (
          <section key={auction.id} className={rowCss}>
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
        ))}
      </section>
    </section>
  )
}

export default Records
