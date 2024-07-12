import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Crate from '@component/Crate'
import { MAIL, PAPER_LINK } from '@constant'
import useLockScroll from '@hook/useLockScroll'
import SvgLink from '@svg/Link'

type Props = ComponentProps & {
  isActive: boolean
}

const MainMenu = ({ css, isActive }: Props) => {
  useLockScroll(isActive)

  const crateCss = clsx('lg:hidden', 'menu', {
    'menu-active': isActive,
    'menu-inactive': !isActive,
  })
  const innerCss = clsx({
    'menu-active': isActive,
    'menu-inactive': !isActive,
  })
  const liCss = 'p-4 t-14 b-b-green text-white hover:text-grass'
  const linkCss = 'w-full f-center-between'

  return (
    <Crate css={crateCss}>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasXSpacing={false}>
        <nav className="list-none">
          <li className={liCss}>
            <NavLink className={linkCss} to={PAPER_LINK} target="_blank">
              GREEN PAPER
              <SvgLink />
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={linkCss} to="/showcase">
              SHOWCASE
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={linkCss} to="/claim">
              CLAIM
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={linkCss} to={MAIL}>
              CONTACT US
            </NavLink>
          </li>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default MainMenu
