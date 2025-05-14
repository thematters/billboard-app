import clsx from 'clsx'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Box from '@components/Box'

import Bars from './Bars'
import Connect from './Connect'
import Logo from './Logo'
import Me from './Me'
import Menu from './Menu'

const Header = () => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const baseCss = clsx('sticky top-0 z-30 py-[22px] md:py-[20px]')
  const boxCss = clsx('f-row-cb mx-auto max-w-header')
  const leftCss = clsx('f-row-cs')
  const rightCss = clsx('f-row-ce')

  return (
    <header className={baseCss}>
      <Box classes={boxCss}>
        <section className={leftCss}>
          <Logo />
          <Menu />
        </section>
        <section className={rightCss}>
          {isEstablished ? <Me /> : <Connect />}
          <Bars />
        </section>
      </Box>
    </header>
  )
}

export default Header
