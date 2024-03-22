import type { ComponentProps } from '@type'

import clsx from 'clsx'

type Props = ComponentProps & {
  rounds: Record<string, any>[]
}

const Record = ({ css, rounds }: Props) => {
  const isEmpty = !rounds || rounds.length === 0

  const outerCss = clsx(css)
  const baseCss = clsx(
    'p-4',
    'md:px-5 md:py-6',
    'grid grid-cols-1 md:grid-cols-3',
    'gap-y-4 md:gap-y-0',
    'bg-black',
    'border-b border-dashed border-beige/60'
  )
  const roundNumCss = clsx('t-20', 'font-bold')
  const statCss = clsx('grid grid-cols-3', 'gap-x-6')
  const borderCss = clsx(
    'tab-border',
    'after:-right-3',
    'after:border-white/30'
  )
  const cellCss = clsx('relative', borderCss)
  const numCss = clsx('mt-1', 't-14', 'font-medium')

  return (
    <section className={outerCss}>
      {rounds.map((round) => (
        <section key={round.id} className={baseCss}>
          <section className="col-span-2">
            <p className="t-12">
              {round.from} - {round.to}
            </p>
            <p className={roundNumCss}>No. {round.id}</p>
          </section>
          <section className={statCss}>
            <section className={cellCss}>
              <p className="t-12">Articles</p>
              <p className={numCss}>{round.cidCount}</p>
            </section>
            <section className={cellCss}>
              <p className="t-12">Creators</p>
              <p className={numCss}>{round.userCount}</p>
            </section>
            <section>
              <p className="t-12">Total</p>
              <p className={numCss}>
                {round.amount} <br className="md:hidden" /> USDT
              </p>
            </section>
          </section>
        </section>
      ))}
    </section>
  )
}

export default Record
