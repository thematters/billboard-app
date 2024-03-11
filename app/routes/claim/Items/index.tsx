import clsx from 'clsx'

import BaseButton from '@components/Button/Base'
import SvgClaimEmpty from '@svgs/ClaimEmpty'

import Item from './Item'

type Props = {
  data: any
  click: () => void
}

const Items = ({ data, click }: Props) => {
  const base = data.reduce(
    (r, v) => {
      const root = v.root
      const sub = v.items.reduce(
        (r, d) => {
          const amount = Number(d.amount) / 1e6
          r.items.push({ ...d, root, amount })
          r.amount = r.amount + amount
          return r
        },
        { items: [], amount: 0 }
      )

      r.items = [...r.items, ...sub.items]
      r.total = r.total + sub.amount
      return r
    },
    { items: [], total: 0 }
  )

  const baseCss = clsx('lg:pb-20', 'max-limit')

  const listCss = clsx(
    'border-t border-green',
    'max-h-[642px]',
    'overflow-y-scroll'
  )

  const totalCss = clsx(
    'p-4 md:p-5',
    'bg-green',
    'text-black',
    'text-left md:text-right',
    't-16 md:t-20'
  )

  const totalHeadCss = clsx('font-normal', 'mr-2')

  const totalNumCss = clsx('font-bold')

  const btnCss = clsx('mt-10', 'px-28', 'mx-auto', 't-18', 'font-normal')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <section className={listCss}>
        {base.items.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </section>
      <section className={totalCss}>
        <span className={totalHeadCss}>Total Amount:</span>
        <span className={totalNumCss}>{base.total.toFixed(2)} USDT</span>
      </section>
      <BaseButton css={btnCss} color="dim">
        Claim
      </BaseButton>
    </section>
  )
}

export default Items
