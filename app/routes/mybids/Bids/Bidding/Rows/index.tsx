import clsx from 'clsx'

import EmptyRow from '../../EmptyRow'

import Row from './Row'

type PropsType = {
  data: Record<string, Anything>
}

const Rows = ({ data }: PropsType) => {
  const bids = data?.bids || []

  const isEmpty = bids.length === 0

  const baseCss = clsx({
    '[&>section]:border-b [&>section]:border-gray-80 [&>section]:border-dashed [&>section:last-child]:border-b-0':
      !isEmpty,
  })

  return (
    <section className={baseCss}>
      {bids.map((d: Anything) => (
        <Row key={d.id} data={d} />
      ))}
      {isEmpty && <EmptyRow />}
    </section>
  )
}

export default Rows
