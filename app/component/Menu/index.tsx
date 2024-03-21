import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Crate from '@component/Crate'
import { MAIL, PAPER_LINK } from '@constant'
import useLockScroll from '@hook/useLockScroll'
import SvgLink from '@svg/Link'

type Props = ComponentProps & {
  isMenuActive: boolean
}

const Menu = ({ children, css, isMenuActive }: Props) => {
  useLockScroll(isMenuActive)

  const crateCss = clsx('lg:hidden', 'menu', {
    'menu-active': isMenuActive,
    'menu-inactive': !isMenuActive,
  })
  const innerCss = clsx({
    'menu-active': isMenuActive,
    'menu-inactive': !isMenuActive,
  })
  const liCss = clsx('p-4', 't-14', 'b-b-green', 'text-white hover:text-grass')
  const linkCss = clsx('w-full', 'f-center-between')

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

export default Menu
