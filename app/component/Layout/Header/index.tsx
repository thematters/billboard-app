import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useEffect } from 'react'

import { BREAKPOINT } from '@constant'
import ButtonLink from '@component/Button/Link'
import Logo from '@component/Button/Logo'
import Crate from '@component/Crate'
import Hamburger from '@component/Hamburger'
import SvgLink from '@svg/Link'

type Props = {
  isMenuActive: boolean
  setMenuActive: (value: boolean) => void
}

const Header = ({ isMenuActive, setMenuActive }: Props) => {
  const click = () => setMenuActive(!isMenuActive)

  useEffect(() => {
    const menuHandler = _.debounce(() => {
      if (window.innerWidth > BREAKPOINT.lg && isMenuActive === true) {
        setMenuActive(false)
      }
    }, 100)

    window.addEventListener('resize', menuHandler)
    return () => window.removeEventListener('resize', menuHandler)
  }, [isMenuActive])

  const baseCss = clsx('fixed', 'top-0', 'left-0', 'w-full', 'z-10', 'bg-dim')
  const innerCss = clsx('py-4 lg:py-8', 'f-center-between')
  const navCss = clsx('hidden', 'lg:f-center-end')

  return (
    <section className={baseCss}>
      <Crate hasBottomBorder>
        <Crate.Inner css={innerCss}>
          {/* Billboard Logo */}
          <Logo />

          {/* Nav Menu */}
          <section className={navCss}>
            <ButtonLink color="dim" css="mr-4" to="/">
              WHITE PAPER
              <SvgLink css="ml-2" />
            </ButtonLink>
            <ButtonLink color="grass" css="mr-4" to="/showcase">
              SHOWCASE
            </ButtonLink>
            <ButtonLink color="grass" to="/claim">
              CLAIM
            </ButtonLink>
          </section>

          {/* Hamburger Menu */}
          <section className="lg:hidden" onClick={click}>
            <Hamburger isMenuActive={isMenuActive} />
          </section>
        </Crate.Inner>
      </Crate>
    </section>
  )
}

export default Header
