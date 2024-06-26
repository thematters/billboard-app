import type { AppContext } from '@type'

import { NavLink, useOutletContext } from '@remix-run/react'
import clsx from 'clsx'

import ButtonLink from '@component/Button/Link'
import SvgLink from '@svg/Link'
import { formatAddress, formatDate } from '@util/format'

import Record from './Record'

type Props = {
  data: Record<string, any>
}

const Records = ({ data }: Props) => {
  const context = useOutletContext<AppContext>()
  const auctions = (data?.auctions || []).map(
    (auction: Record<string, any>) => ({
      ...auction,
      price: (auction?.price || 0).toFixed(2),
      endAt: formatDate(auction.endAt),
      txHash: formatAddress(auction.txHash),
      link: `${context.urlOpExplorer}/tx/${auction.txHash}`,
    })
  )
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
  const moreCss = clsx('py-4', 'f-center')
  const moreBtnCss = clsx('t-12', 'font-normal', 'bg-black')

  return (
    <section className={baseCss}>
      <section className={headCss}>
        <section className={cellCss}>Price</section>
        <section className={cellCss}>Bidder</section>
        <section className={cellCss}>Date</section>
        <section>TxHash</section>
      </section>
      {isEmpty && (
        <section className={rowBaseCss}>
          <section className={emptyRowCss}>No auction data available</section>
        </section>
      )}
      <section className={rowsCss}>
        {auctions.map((auction: Record<string, any>) => (
          <Record key={auction.id} auction={auction} />
        ))}
        {(auctions?.length || 0) === 10 && (
          <section className={moreCss}>
            <ButtonLink
              css={moreBtnCss}
              color="dim"
              to={context.urlContract}
              target="_blank"
            >
              <p className="f-center">
                View More on Etherscan
                <SvgLink css="ml-1" width={14} height={14} />
              </p>
            </ButtonLink>
          </section>
        )}
      </section>
    </section>
  )
}

export default Records
