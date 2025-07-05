import clsx from 'clsx'
import { useState } from 'react'

import Box from '@components/Box'
import Tabs from '@components/Tabs'
import SideNav from '@components/SideNav'

import Bid from './Bid'
import General from './General'
import Reward from './Reward'

const Page = () => {
  const [selected, setSelected] = useState('reward')

  const items = [
    { key: 'general', name: 'General' },
    { key: 'bid', name: 'Bid' },
    { key: 'reward', name: 'Reward' },
  ]

  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')
  const layoutCss = clsx('grid grid-cols-4 gap-x-10')
  const tabCss = clsx('col-span-4 md:hidden')
  const navCss = clsx('col-span-1 hidden md:block')
  const contentCss = clsx('col-span-4 md:col-span-3')

  return (
    <Box classes={baseCss}>
      <div className={layoutCss}>
        <Tabs
          classes={tabCss}
          items={items}
          selected={selected}
          onClick={setSelected}
        />
        <div className={navCss}>
          <SideNav items={items} selected={selected} onClick={setSelected} />
        </div>
        <div className={contentCss}>
          {selected === 'general' && <General />}
          {selected === 'bid' && <Bid />}
          {selected === 'reward' && <Reward />}
        </div>
      </div>
    </Box>
  )
}

export default Page
