import { useState } from 'react'

import useQueryParams from '@hooks/useQueryParams'

import Accepted from './Accepted'
import Bidding from './Bidding'
import Outbid from './Outbid'

type PropsType = {
  setStep: (value: MyBidsStepType) => void
}

const Bids = ({ setStep }: PropsType) => {
  const { tab } = useQueryParams()
  const [selected, setSelected] = useState(tab || 'accepted')

  const items = [
    { key: 'accepted', name: 'Accepted' },
    { key: 'bidding', name: 'Bidding' },
    { key: 'outbid', name: 'Outbid' },
  ]

  return (
    <section>
      {selected === 'accepted' && (
        <Accepted items={items} selected={selected} setSelected={setSelected} />
      )}
      {selected === 'bidding' && (
        <Bidding items={items} selected={selected} setSelected={setSelected} />
      )}
      {selected === 'outbid' && (
        <Outbid
          items={items}
          selected={selected}
          setSelected={setSelected}
          setStep={setStep}
        />
      )}
    </section>
  )
}

export default Bids
