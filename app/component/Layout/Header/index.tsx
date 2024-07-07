import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useEffect } from 'react'

import { BREAKPOINT, PAPER_LINK } from '@constant'
import ButtonLink from '@component/Button/Link'
import Logo from '@component/Button/Logo'
import Crate from '@component/Crate'
import Hamburger from '@component/Hamburger'
import SvgLink from '@svg/Link'

type Props = {
  isMainMenuActive: boolean
  setMainMenuActive: (value: boolean) => void
}

const Header = ({ isMainMenuActive, setMainMenuActive }: Props) => {
  const mainMenuClick = () => setMainMenuActive(!isMainMenuActive)

  useEffect(() => {
    const menuHandler = _.debounce(() => {
      if (window.innerWidth > BREAKPOINT.lg && isMainMenuActive === true) {
        setMainMenuActive(false)
      }
    }, 100)

    window.addEventListener('resize', menuHandler)
    return () => window.removeEventListener('resize', menuHandler)
  }, [isMainMenuActive])

  const baseCss = clsx('fixed', 'top-0', 'left-0', 'w-full', 'z-10', 'bg-dim')
  const innerCss = clsx('py-4 lg:py-8', 'f-center-between')
  const navCss = clsx('hidden', 'lg:f-center-end')

  return (
    <section className={baseCss}>
      <Crate hasBottomBorder>
        <Crate.Inner css={innerCss}>
          <Logo />

          <section className={navCss}>
            <ButtonLink color="dim" css="mr-4" to={PAPER_LINK} target="_blank">
              GREEN PAPER
              <SvgLink css="ml-2" />
            </ButtonLink>
            <ButtonLink color="grass" css="mr-4" to="/showcase">
              SHOWCASE
            </ButtonLink>
            <ButtonLink color="grass" to="/claim">
              CLAIM
            </ButtonLink>
          </section>

          <section className="lg:hidden">
            <Hamburger
              onClick={mainMenuClick}
              isMenuActive={isMainMenuActive}
            />
          </section>
        </Crate.Inner>
      </Crate>
    </section>
  )
}

export default Header
