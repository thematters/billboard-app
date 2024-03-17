import clsx from 'clsx'
import _ from 'lodash'

import Carousel from '@component/Carousel'
import ButtonLink from '@component/Button/Link'
import { formatDate } from '@util/web3'

import Record from './Record'

type Props = {
  data: Record<string, any>[]
}

const Records = ({ data }: Props) => {
  const rawRounds = (data?.rounds || []).map((round) => ({
    ...round,
    id: _.padStart((round?.id || '').replace('#', ''), 3, '0'),
    price: (round?.amount || 0).toFixed(2),
    from: formatDate(round.from),
    to: formatDate(round.to),
  }))
  const rounds = _.chunk(rawRounds, 5)
  const isEmpty = !rounds || rounds.length === 0

  const baseCss = clsx(
    'p-4',
    'md:px-5 md:py-6',
    'grid grid-cols-1 md:grid-cols-3',
    'gap-y-4 md:gap-y-0',
    'bg-black',
    'border-b border-dashed border-beige/60'
  )
  const emptyCss = clsx(baseCss, 'md:grid-cols-1', 'text-center')
  const roundNumCss = clsx('t-20', 'font-bold')
  const statCss = clsx('grid grid-cols-3', 'gap-x-6')
  const borderCss = clsx(
    'tab-border',
    'after:-right-3',
    'after:border-white/30'
  )
  const cellCss = clsx('relative', borderCss)
  const numCss = clsx('mt-1', 't-14', 'font-medium')
  const btnCss = clsx('px-28', 'mt-10', 'mx-auto', 't-18', 'font-normal')

  return (
    <section>
      {isEmpty && (
        <section className={emptyCss}>
          No funding distribution data available
        </section>
      )}

      {!isEmpty && (
        <Carousel size={rounds.length}>
          {rounds.map((chunk, i) => (
            <Record key={i} css="embla__slide" rounds={chunk} />
          ))}
        </Carousel>
      )}

      {!isEmpty && (
        <ButtonLink css={btnCss} color="dim" to="/claim">
          Claim
        </ButtonLink>
      )}
    </section>
  )
}

export default Records
