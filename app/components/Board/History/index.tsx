import { NavLink } from '@remix-run/react'

import IconRedirectLink from '~/components/Icons/RedirectLink'
import IconScroll from '~/components/Icons/Scroll'

interface Transaction {
  price: number
  from: string
  to: string
  date: string
  hash: string
}

interface HistoryProps {
  outerClass?: string
  txs: Array<Transaction>
}

const History = ({ outerClass, txs }: HistoryProps) => {
  const head = [
    'p-4 bg-green flex-center-start',
    'border-all-green rounded-t-[20px]',
    'text-black font-semibold',
  ].join(' ')

  const rowBasis = ['p-4 grid grid-cols-5 gap-x-4'].join(' ')

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
        <section className={`${cell} ${divider} md:flex-center-between`}>
          TxHash
        </section>
      </section>

      {/* Rows */}
      <section className={rows}>
        {txs.map((tx, i) => (
          <section key={`${tx.hash}${i}`} className={row}>
            <section className={cell}>{tx.price}</section>
            <section className={`${cell} ${divider}`}>{tx.from}</section>
            <section className={`${cell} ${divider}`}>{tx.to}</section>
            <section className={`${cell} ${divider}`}>{tx.date}</section>
            <section className={`${cell} ${divider} md:flex-center-between`}>
              <NavLink className="w-full md:flex-center-between" to="/">
                {tx.hash}
                <IconRedirectLink width={16} height={16} />
              </NavLink>
            </section>
          </section>
        ))}
      </section>
    </section>
  )
}

export default History
