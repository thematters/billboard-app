import clsx from 'clsx'

import Box from '@components/Box'

import Bars from './Bars'
import Connect from './Connect'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
  const baseCss = clsx('sticky top-0 z-30 py-[22px] md:py-[20px]')
  const boxCss = clsx('fsc mx-auto max-w-header')
  const leftCss = clsx('flc')
  const rightCss = clsx('frc')

  return (
    <header className={baseCss}>
      <Box classes={boxCss}>
        <section className={leftCss}>
          <Logo />
          <Menu />
        </section>
        <section className={rightCss}>
          <Connect />
          <Bars />
        </section>
      </Box>
    </header>
  )
}

export default Header
