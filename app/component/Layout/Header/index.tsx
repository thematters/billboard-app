import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useEffect } from 'react'

import { BREAKPOINT, PAPER_LINK } from '@constant'
import Avatar from '@component/Avatar'
import ButtonLink from '@component/Button/Link'
import Logo from '@component/Button/Logo'
import Crate from '@component/Crate'
import Hamburger from '@component/Hamburger'
import SvgLink from '@svg/Link'

type Props = {
  isMeMenuActive: boolean
  setMeMenuActive: (value: boolean) => void
  isMainMenuActive: boolean
  setMainMenuActive: (value: boolean) => void
}

const Header = ({
  isMeMenuActive,
  setMeMenuActive,
  isMainMenuActive,
  setMainMenuActive,
}: Props) => {
  const meMenuClick = () => setMeMenuActive(!isMeMenuActive)
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

  const baseCss = 'fixed top-0 left-0 w-full z-10 bg-dim'
  const innerCss = 'py-4 lg:py-8 f-center-between'
  const navCss =
    'ml-6 hidden lg:f-center-end text-white border-l border-beige border-opacity-30'
  const navBtnCss = 'pt-px ml-6 hover:text-grass'
  const hamCss = 'ml-6 lg:hidden'

  return (
    <section className={baseCss}>
      <Crate hasBottomBorder>
        <Crate.Inner css={innerCss}>
          <section className="f-center-start">
            <Logo />

            <section className={navCss}>
              <NavLink
                className={clsx(navBtnCss, 'f-center-between')}
                to={PAPER_LINK}
                target="_blank"
              >
                GREEN PAPER
                <SvgLink />
              </NavLink>
              <NavLink className={navBtnCss} to="/showcase">
                SHOWCASE
              </NavLink>
              <NavLink className={navBtnCss} to="/claim">
                CLAIM
              </NavLink>
            </section>
          </section>

          <section className="f-center-end">
            <Avatar onClick={meMenuClick} isMenuActive={isMeMenuActive} />
            <Hamburger
              css={hamCss}
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
