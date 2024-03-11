import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'

type Props = {
  data: any
}

const Item = ({ data }: Props) => {
  const baseCss = clsx(
    'p-4 md:p-5',
    'bg-black',
    'border-b border-dashed',
    'grid grid-cols-1 md:grid-cols-8',
    'gap-x-0 md:gap-x-4',
    'gap-y-4 md:gap-y-0'
  )

  const leftCss = clsx('t-14', 'font-normal', 'col-span-7', 'one-line')

  const linkCss = clsx('hover:text-grass')

  const rightCss = clsx('pr-3')

  const amountHeadCss = clsx('t-12', 'font-normal', 'opacity-60')

  const amountCss = clsx('mt-1', 't-14', 'font-medium')

  return (
    <section className={baseCss}>
      <section className={leftCss}>
        <NavLink className={linkCss} to={data.url} target="_blank">
          {data.title}
        </NavLink>
      </section>
      <section className={rightCss}>
        <section className={amountHeadCss}>Amount</section>
        <section className={amountCss}>
          {_.floor(data.amount, 2)}
          <span className="t-12"> USDT</span>
        </section>
      </section>
    </section>
  )
}

export default Item
