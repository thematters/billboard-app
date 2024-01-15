import { NavLink } from '@remix-run/react'

import IconRedirectLink from '~/components/Icons/RedirectLink'
import IconScroll from '~/components/Icons/Scroll'

interface HistoryItem {
  auctionId: number
  price: number
  from: string
  to: string
  date: string
  hash?: string
}

interface HistoryProps {
  outerClass?: string
  items: Array<HistoryItem>
}

const History = ({ outerClass, items }: HistoryProps) => {
  const head = [
    'p-4 bg-green flex-center-start',
    'border-all-green rounded-t-[20px]',
    'text-black font-semibold',
  ].join(' ')

  const rowBasis = ['p-4 grid grid-cols-4 gap-x-4'].join(' ')

  const rowFixed = [rowBasis, 'border-x-green bg-black'].join(' ')

  const row = [rowBasis, 'border-b border-beige border-opacity-20'].join(' ')

  const cell = [
    'relative w-full flex-center-start grow break-all',
    'text-12 lg:text-14',
  ].join(' ')

  const divider = [
    "before:content-[''] before:w-[1px] before:h-full",
    'before:absolute before:top-0 before:-left-2',
    'before:border-dashed before:border-l before:border-green',
  ].join(' ')

  const rows = [
    'pb-4 bg-dim-black border-x-green border-b-green rounded-b-[20px]',
    'max-h-[387px] overflow-y-scroll',
  ].join(' ')

  return (
    <section className={`w-full ${outerClass}`}>
      {/* Head */}
      <section className={head}>
        <IconScroll className="mr-1" width={14} height={14} />
        Auction History
      </section>

      {/* Fixed Row */}
      <section className={rowFixed}>
        <section className={cell}>Price (MATIC)</section>
        <section className={`${cell} ${divider}`}>From</section>
        <section className={`${cell} ${divider}`}>To</section>
        <section className={`${cell} ${divider}`}>Date</section>
        {/*
        <section className={`${cell} ${divider} md:flex-center-between`}>
          TxHash
        </section>
        */}
      </section>

      {/* Rows */}
      <section className={rows}>
        {items.map((item, i) => (
          <section key={item.auctionId} className={row}>
            <section className={cell}>{item.price}</section>
            <section className={`${cell} ${divider}`}>{item.from}</section>
            <section className={`${cell} ${divider}`}>{item.to}</section>
            <section className={`${cell} ${divider}`}>{item.date}</section>
            {/*
            <section className={`${cell} ${divider} md:flex-center-between`}>
              <NavLink className="w-full md:flex-center-between" to="/">
                {item.hash}
                <IconRedirectLink width={16} height={16} />
              </NavLink>
            </section>
            */}
          </section>
        ))}
      </section>
    </section>
  )
}

export default History
