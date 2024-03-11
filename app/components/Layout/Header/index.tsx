import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useEffect } from 'react'

import { BREAKPOINTS } from '@constants'
import LinkButton from '@components/Button/Link'
import Logo from '@components/Button/Logo'
import Crate from '@components/Crate'
import Hamburger from '@components/Hamburger'
import SvgLink from '@svgs/Link'

type Props = {
  isMenuActive: boolean
  setMenuActive: (value: boolean) => void
}

const Header = ({ isMenuActive, setMenuActive }: Props) => {
  useEffect(() => {
    const menuHandler = _.debounce(() => {
      if (window.innerWidth > BREAKPOINTS.lg && isMenuActive === true) {
        setMenuActive(false)
      }
    }, 100)

    window.addEventListener('resize', menuHandler)
    return () => window.removeEventListener('resize', menuHandler)
  }, [isMenuActive])

  const headCss = clsx('fixed', 'top-0', 'left-0', 'w-full', 'z-10', 'bg-dim')

  const innerCss = clsx('py-4 lg:py-8', 'f-center-between')

  const navCss = clsx('hidden', 'lg:f-center-end')

  const click = () => setMenuActive(!isMenuActive)

  return (
    <section className={headCss}>
      <Crate hasBottomBorder>
        <Crate.Inner css={innerCss}>
          {/* Billboard Logo */}
          <Logo />

          {/* Nav Menu */}
          <section className={navCss}>
            <LinkButton color="dim" css="mr-4" to="/">
              WHITE PAPER
              <SvgLink css="ml-2" />
            </LinkButton>
            <LinkButton color="grass" css="mr-4" to="/showcase">
              SHOWCASE
            </LinkButton>
            <LinkButton color="grass" to="/claim">
              CLAIM
            </LinkButton>
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
