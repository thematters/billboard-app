import type { ComponentProps } from '@type'

import clsx from 'clsx'

type Props = ComponentProps & {
  rounds: Record<string, any>[]
}

const Record = ({ css, rounds }: Props) => {
  const isEmpty = !rounds || rounds.length === 0

  const outerCss = clsx(css)
  const baseCss =
    'p-4 md:px-5 md:py-6 cols-1 md:cols-3 gap-y-4 md:gap-y-0 bg-black b-b-dashed border-beige/60'
  const roundNumCss = 't-20 font-bold'
  const statCss = 'cols-3 gap-x-6'
  const borderCss = 'tab-border after:-right-3 after:border-white/30'
  const cellCss = clsx('relative', borderCss)
  const numCss = 'mt-1 t-14 font-medium'

  return (
    <section className={outerCss}>
      {rounds.map((round) => (
        <div key={round.id} className={baseCss}>
          <div className="col-span-2">
            <p className="t-12">
              {round.from} - {round.to}
            </p>
            <p className={roundNumCss}>No. {round.id}</p>
          </div>
          <div className={statCss}>
            <div className={cellCss}>
              <p className="t-12">Articles</p>
              <p className={numCss}>{round.cidCount}</p>
            </div>
            <div className={cellCss}>
              <p className="t-12">Creators</p>
              <p className={numCss}>{round.userCount}</p>
            </div>
            <div>
              <p className="t-12">Total</p>
              <p className={numCss}>
                {round.amount} <br className="md:hidden" /> USDT
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Record
