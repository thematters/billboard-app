import clsx from 'clsx'
import { useState } from 'react'

import Tabs from '@components/Tabs'
import { toFloatUSDT } from '@utils/num'

import BidButton from './BidButton'
import Bids from './Bids'
import Overview from './Overview'

type PropsType = {
  data: Record<string, Anything>
}

const Meta = ({ data }: PropsType) => {
  const [selected, setSelected] = useState('history')
  const { board, epochRange, highestBid } = data
  const tabItems = [
    { key: 'overview', name: 'Overview' },
    { key: 'history', name: 'Bid History' },
  ]

  const highestPrice = toFloatUSDT(Number(highestBid?.price || 0), 2)

  const baseCss = clsx('w-full mt-6 md:mt-0')
  const timeCss = clsx('text-sm font-normal')
  const timeHintCss = clsx('text-green-10')
  const timeEndCss = clsx('text-blue-10')
  const nameCss = clsx('pt-1 text-[28px] font-medium')
  const highestBidHintCss = clsx('text-gray-30 font-normal mt-6')
  const highestBidCss = clsx('text-xl text-white font-semibold')
  const tabCss = clsx('mt-6')

  return (
    <section className={baseCss}>
      {/* auction info */}
      <p className={timeCss}>
        <span className={timeHintCss}>Auction ends on</span>
        <span className={timeEndCss}>&nbsp;&nbsp;{epochRange.end} (UTC+8)</span>
      </p>
      <h1 className={nameCss}>{board.name}</h1>

      {/* bid */}
      <p className={highestBidHintCss}>Highest Bid</p>
      <p className={highestBidCss}>{highestPrice} USDT</p>

      {/* button */}
      <BidButton data={data} />

      {/* rest info */}
      <section className={tabCss}>
        <Tabs items={tabItems} selected={selected} onClick={setSelected} />
        {selected === 'overview' && <Overview data={data} />}
        {selected === 'history' && <Bids data={data} />}
      </section>
    </section>
  )
}

export default Meta
