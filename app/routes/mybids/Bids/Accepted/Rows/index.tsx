import clsx from 'clsx'

import EmptyRow from '../../EmptyRow'

import Row from './Row'

type PropsType = {
  data: Record<string, Anything>
}

const Rows = ({ data }: PropsType) => {
  const runningBids = data?.runningBids || []
  const upcomingBids = data?.upcomingBids || []

  const isEmpty = runningBids.length === 0 && upcomingBids.length === 0

  const baseCss = clsx({
    '[&>section]:border-b [&>section]:border-gray-80 [&>section]:border-dashed [&>section:last-child]:border-b-0':
      !isEmpty,
  })

  return (
    <section className={baseCss}>
      {runningBids.map((d: Anything) => (
        <Row key={d.id} data={d} isRunning={true} />
      ))}
      {upcomingBids.map((d: Anything) => (
        <Row key={d.id} data={d} isRunning={false} />
      ))}
      {isEmpty && <EmptyRow />}
    </section>
  )
}

export default Rows
