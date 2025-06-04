import clsx from 'clsx'
import orderBy from 'lodash-es/orderBy'

import SorterSvg from '@components/Svg/Sorter'
import useAppEnv from '@hooks/useAppEnv'
import { formatAddress } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import Bid from './Bid'

type PropsType = {
  data: Record<string, Anything>
}

const Bids = ({ data }: PropsType) => {
  const env = useAppEnv()
  const { bids: rawBids, epochRange } = data
  const bidsData = (rawBids || []).reduce(
    (r: Record<string, Anything>, d: Record<string, Anything>) => {
      const bid = {
        ...d,
        price: toFloatUSDT(d.price || 0, 2),
        bidder: formatAddress(d.bidder),
        bidderAddress: d.bidder,
        txHash: formatAddress(d.txHash),
        link: `${env.urlOpExplorer}/tx/${d.txHash}`,
      }
      r.push(bid)
      return r
    },
    []
  )
  const bids = orderBy(bidsData, ['updatedAtTime'], ['desc'])

  const baseCss = clsx('pt-2')
  const rowHeadCss = clsx('f-col md:f-row-cb text-sm text-gray-50 py-3')
  const sorterCss = clsx('f-row-ce md:f-row-cb mt-2 md:mt-0')
  const emptyRowCss = clsx('text-sm text-gray-30')

  return (
    <section className={baseCss}>
      {/* head */}
      <section className={rowHeadCss}>
        <p>
          {epochRange.start} - {epochRange.end} (UTC+8)
        </p>
        <p className={sorterCss}>
          <SorterSvg />
          Newest
        </p>
      </section>

      <section>
        {bids.map((d) => (
          <Bid key={d.txHash} bid={d} />
        ))}
        {bids.length === 0 && (
          <div className={emptyRowCss}>No bid data available</div>
        )}
      </section>
    </section>
  )
}

export default Bids
