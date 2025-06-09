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
    '[&>section]:border-b [&>section]:border-gray-80 [&>section]:border-dashed':
      !isEmpty,
  })

  return (
    <section>
      {runningBids.map((d: Anything) => (
        <Row key={d.id} data={d} />
      ))}
      {upcomingBids.map((d: Anything) => (
        <Row key={d.id} data={d} />
      ))}
      {isEmpty && <EmptyRow />}
    </section>
  )
}

export default Rows
