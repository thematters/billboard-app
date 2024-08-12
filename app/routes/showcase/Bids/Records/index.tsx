import clsx from 'clsx'
import { orderBy } from 'lodash-es'

import useEnvs from '@hook/useEnvs'
import SvgSorter from '@svg/Sorter'
import { formatRoundId, formatAddress } from '@util/format'

import Record from './Record'

type Props = {
  data: Record<string, any>
}

const Records = ({ data }: Props) => {
  const envs = useEnvs()
  const { epoch, epochRange, bids: rawBids, highestBidder } = data
  const bidsData = (rawBids || []).reduce(
    (r: Record<string, any>, d: Record<string, any>) => {
      const bid = {
        ...d,
        price: (Number(d.price) / 1e6).toFixed(2),
        bidder: formatAddress(d.bidder),
        txHash: formatAddress(d.txHash),
        link: `${envs.urlOpExplorer}/tx/${d.txHash}`,
      }
      if (d.bidder === highestBidder) {
        r.highestBid.push(bid)
      } else {
        r.bids.push(bid)
      }
      return r
    },
    { bids: [], highestBid: [] }
  )
  const orderedBids = orderBy(bidsData.bids, ['placedAtTime'], ['desc'])

  const isEmpty = !rawBids || rawBids.length == 0

  const epochCss = 't-12 md:t-16 font-semibold cols-1 md:cols-2'
  const sortCss = 'f-center-end text-beige/60 font-normal'
  const rangeCss = 'font-normal'

  const baseCss = 'mt-4 bg-dim cols-1'
  const rowCss = 'px-2 py-4 md:px-4 cols-4 gap-x-4 t-12 md:t-14'
  const borderCss = 'tab-border after:-right-2 after:border-green'
  const cellCss = clsx('relative', borderCss)
  const headCss = clsx(rowCss, 'bg-black md:font-medium')
  const rowsCss = 'max-h-[324px] overflow-y-scroll'
  const emptyRowCss = 'col-span-4 text-center'

  return (
    <>
      <div className={epochCss}>
        <div>
          <span className="mr-3">No. {formatRoundId(`${epoch}`)}</span>
          <br className="md-hidden" />
          <span className={rangeCss}>
            {epochRange.start} - {epochRange.end} (UTC+8)
          </span>
        </div>
        <div className={sortCss}>
          <SvgSorter css="mr-1" />
          Sort by: Newest
        </div>
      </div>
      <div className={baseCss}>
        <div className={headCss}>
          <div className={cellCss}>Bid Price</div>
          <div className={cellCss}>Bidder</div>
          <div className={cellCss}>Date</div>
          <div>TxHash</div>
        </div>

        <div className={rowsCss}>
          {bidsData.highestBid.map((bid: Record<string, any>) => (
            <Record key={bid.txHash} bid={bid} isHighest />
          ))}
          {orderedBids.map((bid: Record<string, any>) => (
            <Record key={bid.txHash} bid={bid} />
          ))}
        </div>

        {isEmpty && (
          <div className={rowCss}>
            <div className={emptyRowCss}>No bids data available</div>
          </div>
        )}
      </div>
    </>
  )
}

export default Records
