import clsx from 'clsx'

import { toFloatUSDT } from '@utils/num'

type PropsType = {
  classes: string
  rounds: Record<string, Anything>[]
}

const Row = ({ classes, rounds }: PropsType) => {
  const baseCss = clsx(classes)
  const cardsCss = clsx(
    'grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5'
  )
  const cardCss = clsx('px-4 py-6 bg-gray-90 rounded-[20px]')
  const timeCss = clsx('text-sm text-gray-50 font-normal')
  const roundCss = clsx('text-xl text-white font-semibold')
  const statCss = clsx('mt-4 grid grid-cols-3')
  const subTitleCss = clsx('text-xs text-gray-30 font-normal')
  const numCss = clsx('pt-1 text-sm text-white font-semibold')

  return (
    <section className={baseCss}>
      <div className={cardsCss}>
        {rounds.map((round) => (
          <div key={round.id} className={cardCss}>
            <div className={timeCss}>
              {round.from} - {round.to}
            </div>
            <div className={roundCss}>No. {round.id}</div>
            <div className={statCss}>
              <div>
                <div className={subTitleCss}>Articles</div>
                <div className={numCss}>{round.cidsCount}</div>
              </div>
              <div>
                <div className={subTitleCss}>Creators</div>
                <div className={numCss}>{round.usersCount}</div>
              </div>
              <div>
                <div className={subTitleCss}>Total</div>
                <div className={numCss}>{toFloatUSDT(round.amount)} USDT</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Row
