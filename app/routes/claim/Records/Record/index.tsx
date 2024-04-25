import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'

type Props = {
  data: Record<string, any>
}

const Record = ({ data }: Props) => {
  const baseCss = clsx(
    'p-4 md:p-5',
    'bg-black',
    'border-b border-dashed',
    'grid grid-cols-1 md:grid-cols-8',
    'gap-x-0 md:gap-x-4',
    'gap-y-4 md:gap-y-0'
  )

  const leftCss = clsx('font-normal', 'col-span-7')
  const roundCss = clsx('t-12', 'opacity-60')
  const linkCss = clsx('mt-1', 't-14', 'one-line')
  const rightCss = clsx('pr-3')
  const amountHeadCss = clsx('t-12', 'font-normal', 'opacity-60')
  const amountCss = clsx('mt-1', 't-14', 'font-medium')
  const amountUnitCss = clsx('t-12 font-normal')

  return (
    <section className={baseCss}>
      <section className={leftCss}>
        <section className={roundCss}>
          {data.from} - {data.to} · No. {data.roundId}
        </section>
        <section className={linkCss}>
          <NavLink className="hover:text-grass" to={data.url} target="_blank">
            {data.title}
          </NavLink>
        </section>
      </section>
      <section className={rightCss}>
        <section className={amountHeadCss}>Amount</section>
        <section className={amountCss}>
          {_.floor(data.amount, 2)}
          <span className={amountUnitCss}> USDT</span>
        </section>
      </section>
    </section>
  )
}

export default Record
