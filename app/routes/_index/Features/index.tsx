import clsx from 'clsx'

import Box from '@components/Box'
import Sketch1Svg from '@components/Svg/Features/Sketch1'
import Sketch2Svg from '@components/Svg/Features/Sketch2'
import Sketch3Svg from '@components/Svg/Features/Sketch3'

import Row from './Row'

const Features = () => {
  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')
  const titleCss = clsx('section-title')
  const listCss = clsx('mt-8 md:mt-16 grid grid-cols-1 gap-y-10')

  return (
    <Box classes={baseCss}>
      <h1 className={titleCss}>Meet Billboard</h1>
      <section className={listCss}>
        <Row
          icon={<Sketch1Svg />}
          color="green"
          title="New Advertising Experience Unlocked"
          items={[
            'All AD boards are in on-chain auctions—bid anytime, no intermediaries.',
            'Target right-fit AD boards without opaque control —engage with users that truly care.',
            'Flex your board bids based on real-time market feedback and AD performance.',
          ]}
          to="/learn"
        />
        <Row
          icon={<Sketch2Svg />}
          color="purple"
          title="Trusted and Sustainable Ecosystem"
          items={[
            'Fairly rewarding creators with community-governed AD revenue, inspiring more quality.',
            'On-chain rewarding brings transparent and instant income for creators—no more long waits.',
            'Community-led advertising reduces reliance on user privacy.',
          ]}
          to="/learn"
        />
        <Row
          icon={<Sketch3Svg />}
          color="blue"
          title="Simple Integration, Supercharges Apps"
          items={[
            'Utilize EVM NFT standard, operations can be done with few clicks in your favorite wallets.',
            'Open-sourced stack easily empowers both web2 & web3 apps.',
          ]}
          to="/learn"
        />
      </section>
    </Box>
  )
}

export default Features
