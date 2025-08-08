import clsx from 'clsx'
import orderBy from 'lodash-es/orderBy'

import MonoButton from '@components/Button/Mono'
import useAppEnv from '@hooks/useAppEnv'
import { formatAddress, formatDate } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import Row from './Row'

type PropsType = {
  data: Record<string, Anything>
}

const Rows = ({ data }: PropsType) => {
  const env = useAppEnv()
  const auctions = orderBy(
    (data?.auctions || []).map((auction: Record<string, Anything>) => {
      const { bid, epoch, epochRange, txHash } = auction
      return {
        epoch,
        price: toFloatUSDT(bid.price || 0, 2),
        bidder: formatAddress(bid.bidder),
        endAt: formatDate(epochRange.end),
        txHash: formatAddress(txHash),
        link: `${env.urlOpExplorer}/tx/${txHash}`,
      }
    }),
    ['epoch'],
    ['desc']
  )
  const isEmpty = !auctions || auctions.length === 0

  const baseCss = clsx('mt-6 md:mt-10')
  const headCss = clsx(
    'grid grid-cols-4 gap-x-5 md:gap-x-6',
    'text-xs md:text-xl font-semibold text-white text-left',
    'border-b border-gray-80 [&>div]:py-3 [&>div:last-child]:text-right'
  )
  const rowCss = clsx('py-3 text-xs md:text-base text-gray-30 w-full')
  const emptyCss = clsx(rowCss, 'text-center')
  const moreCss = clsx('block mt-8 mx-auto px-5 py-3 text-xs md:text-base')

  return (
    <section className={baseCss}>
      <section className={headCss}>
        <div>Price</div>
        <div>Bidder</div>
        <div>Date</div>
        <div>TxHash</div>
      </section>

      <section>
        {isEmpty && (
          <div className={emptyCss}>No auction data at the moment</div>
        )}
        {auctions.map((auction: Record<string, Anything>) => (
          <Row key={auction.txHash} auction={auction} />
        ))}
        {auctions.length >= 8 && (
          <MonoButton
            classes={moreCss}
            color="dim-gray"
            type="link"
            shape="circle"
            to={env.urlContract}
          >
            View More on Etherscan
          </MonoButton>
        )}
      </section>
    </section>
  )
}

export default Rows
