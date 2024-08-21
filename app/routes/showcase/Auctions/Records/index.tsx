import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { orderBy } from 'lodash-es'

import LinkButton from '@component/Button/Link'
import useEnvs from '@hook/useEnvs'
import SvgLink from '@svg/Link'
import { formatAddress, formatDate } from '@util/format'
import { toFloatUSDT } from '@util/num'

import Record from './Record'

type Props = {
  data: Record<string, any>
}

const Records = ({ data }: Props) => {
  const envs = useEnvs()
  const auctions = orderBy(
    (data?.auctions || []).map((auction: Record<string, any>) => {
      const { bid, epoch, epochRange, txHash } = auction
      return {
        epoch,
        price: toFloatUSDT(Number(bid.price || 0), 2),
        bidder: formatAddress(bid.bidder),
        endAt: formatDate(epochRange.end),
        txHash: formatAddress(txHash),
        link: `${envs.urlOpExplorer}/tx/${txHash}`,
      }
    }),
    ['epoch'],
    ['desc']
  )
  const isEmpty = !auctions || auctions.length == 0

  const baseCss = 'bg-dim cols-1'
  const rowBaseCss = 'px-2 py-4 md:px-4 cols-4 gap-x-4 t-12 md:t-14'
  const borderCss = 'tab-border after:-right-2 after:border-green'
  const cellCss = clsx('relative', borderCss)
  const headCss = clsx(rowBaseCss, 'md:font-meduim', 'bg-black')
  const rowsCss = 'max-h-[324px] overflow-y-scroll'
  const rowCss = clsx(rowBaseCss, 'border-b border-green/40')
  const emptyRowCss = 'col-span-4 text-center'
  const moreCss = 'py-4 f-center'
  const moreBtnCss = 't-12 font-normal bg-black'

  return (
    <section className={baseCss}>
      <div className={headCss}>
        <div className={cellCss}>Price</div>
        <div className={cellCss}>Bidder</div>
        <div className={cellCss}>Date</div>
        <div>TxHash</div>
      </div>
      {isEmpty && (
        <div className={rowBaseCss}>
          <p className={emptyRowCss}>No auction data available</p>
        </div>
      )}
      <div className={rowsCss}>
        {auctions.map((auction: Record<string, any>) => (
          <Record key={auction.txHash} auction={auction} />
        ))}
        {(auctions?.length || 0) === 10 && (
          <div className={moreCss}>
            <LinkButton
              css={moreBtnCss}
              color="dim"
              to={envs.urlContract}
              target="_blank"
            >
              <p className="f-center">
                View More on Etherscan
                <SvgLink css="ml-1" width={14} height={14} />
              </p>
            </LinkButton>
          </div>
        )}
      </div>
    </section>
  )
}

export default Records
