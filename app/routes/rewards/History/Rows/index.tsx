import clsx from 'clsx'
import chunk from 'lodash-es/chunk'
import { useMediaQuery } from 'usehooks-ts'

import Carousel from '@components/Carousel'
import { formatRound } from '@utils/format'

import Row from './Row'

type PropsType = {
  data: Record<string, Anything>
}

const Rows = ({ data }: PropsType) => {
  const isSm = useMediaQuery('(max-width: 767px)')
  const isMd = useMediaQuery('(min-width: 768px) and (max-width: 980px)')

  const chunkSize = isSm ? 1 : isMd ? 3 : 4
  const rawRounds = (data?.rounds || []).map(
    (round: Record<string, Anything>) => formatRound(round)
  )
  const rounds = chunk(rawRounds, chunkSize) as Array<
    Record<string, Anything>[]
  >

  const isEmpty = !rounds || rounds.length === 0

  const titleCss = clsx('section-title')
  const carouselCss = clsx('my-10')

  if (isEmpty) {
    return null
  }

  return (
    <>
      <h1 className={titleCss}>Reward Distribution History</h1>
      <Carousel classes={carouselCss} size={rounds.length}>
        {rounds.map((chunk: Record<string, Anything>[], i: number) => (
          <Row key={i} classes="embla__slide" rounds={chunk} />
        ))}
      </Carousel>
    </>
  )
}

export default Rows
