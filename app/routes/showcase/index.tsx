import { NavLink } from '@remix-run/react'
import _ from 'lodash'
import type React from 'react'

import Auction from '~/components/Board/Auction'
import Detail from '~/components/Board/Detail'
import History from '~/components/Board/History'
import Crate from '~/components/Crate'

import testImg from '../../assets/hero-bg.png'

const Showcase = () => {
  const inner = [
    'px-4 pt-20 pb-9 lg:px-28 lg:pt-44 lg:pb-12 xl:px-48',
    'grid grid-cols-1 gap-y-6 lg:gap-y-10',
  ].join(' ')

  const txs = _.fill(_.range(10), {
    price: 230.0,
    from: '0xb..abc',
    to: '0xa..abc',
    date: 'Nov. 23 2023',
    hash: '0xb..abc',
  })

  return (
    <Crate color="dim" innerClass={inner} hasDots>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
        {/* ContentURI */}
        <img className="w-full h-auto rounded-2xl" src={testImg} />

        {/* Auction */}
        <Auction
          outerClass="lg:col-span-2"
          name="Frontline Fellowship"
          bidPrice={200.36}
          taxRate={0.002}
          next="Dec. 07 2023"
        />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-6">
        {/* Metadata */}
        <Detail
          contract="0xabcd...abcd"
          location="https://matters.town"
          tokenId="88"
          tokenURI="ipfs://abcd...abcd"
        />

        {/* History */}
        <History outerClass="lg:col-span-2" txs={txs} />
      </section>
    </Crate>
  )
}

export default Showcase
