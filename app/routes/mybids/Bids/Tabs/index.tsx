import clsx from 'clsx'

import Tab from './Tab'

type Props = {
  selected: string
  onClick: (value: string) => void
}

const Tabs = ({ selected, onClick }: Props) => {
  const baseCss = 'f-center-start'

  return (
    <div className={baseCss}>
      <Tab isActive={selected === 'running'} onClick={() => onClick('running')}>
        Running
      </Tab>
      <Tab
        css="mx-4"
        isActive={selected === 'bidding'}
        onClick={() => onClick('bidding')}
      >
        Bidding
      </Tab>
      <Tab isActive={selected === 'refund'} onClick={() => onClick('refund')}>
        Bids Refund
      </Tab>
    </div>
  )
}

export default Tabs
