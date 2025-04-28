import chunk from 'lodash-es/chunk.js'

import Carousel from '@component/Carousel'
import ButtonLink from '@component/Button/Link'
import { formatRound } from '@util/format'

import Record from './Record'

type Props = {
  data: Record<string, any>
}

const Records = ({ data }: Props) => {
  const rawRounds = (data?.rounds || []).map((round: Record<string, any>) =>
    formatRound(round)
  )
  const rounds = chunk(rawRounds, 5) as Array<Record<string, any>[]>
  const isEmpty = !rounds || rounds.length === 0

  const baseCss =
    'p-4 md:px-5 md:py-6 cols-1 md:cols-3 gap-y-4 md:gap-y-0 bg-black b-b-dashed border-beige/60'
  const emptyCss = 'col-span-3 text-center'
  const btnCss = 'px-28 mt-10 mx-auto t-18 font-normal'

  return (
    <section>
      {isEmpty && (
        <div className={baseCss}>
          <p className={emptyCss}>No funding distribution data available</p>
        </div>
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
