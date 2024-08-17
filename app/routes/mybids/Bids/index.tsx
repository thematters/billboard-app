import { useState } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Bidding from './Bidding'
import Outbid from './Outbid'
import Running from './Running'
import Tabs from './Tabs'

type Props = {
  setParentStep: (value: string) => void
}

const Bids = ({ setParentStep }: Props) => {
  const [tab, setTab] = useState('running')

  const onTabClick = (value: string) => {
    if (value === tab) {
      return
    }
    setTab(value)
  }

  const baseCss = 'lg:pb-20 max-limit'
  return (
    <section className={baseCss}>
      <h1 className="section-title">MY BIDS</h1>
      <Tabs selected={tab} onClick={onTabClick} />
      {tab === 'running' && <Running />}
      {tab === 'bidding' && <Bidding />}
      {tab === 'outbid' && <Outbid setParentStep={setParentStep} />}
    </section>
  )
}

export default Bids
