import clsx from 'clsx'
import { useState } from 'react'

import Tabs from '@components/Tabs'
import useQueryParams from '@hooks/useQueryParams'

import Accepted from './Accepted'
import Bidding from './Bidding'
import Outbid from './Outbid'

const Bids = () => {
  const { tab } = useQueryParams()
  const [selected, setSelected] = useState(tab || 'outbid')

  const tabItems = [
    { key: 'accepted', name: 'Accepted' },
    { key: 'bidding', name: 'Bidding' },
    { key: 'outbid', name: 'Outbid' },
  ]

  const titleCss = clsx('section-title')
  const tabCss = clsx('mt-4 md:mt-5 px-4 md:px-0')

  return (
    <section>
      <h1 className={titleCss}>Bids</h1>
      <Tabs
        classes={tabCss}
        items={tabItems}
        selected={selected}
        onClick={setSelected}
      />
      {selected === 'accepted' && <Accepted />}
      {selected === 'bidding' && <Bidding />}
      {selected === 'outbid' && <Outbid />}
    </section>
  )
}

export default Bids
