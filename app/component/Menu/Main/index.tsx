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
  const liCss = 't-14 b-b-green text-white hover:text-grass'
  const itemCss = 'p-4 w-full f-center-between'

  return (
    <Crate css={crateCss}>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasXSpacing={false}>
        <nav className="list-none">
          <ul>
            <li className={liCss}>
              <NavLink className={itemCss} to={PAPER_LINK} target="_blank">
                GREEN PAPER
                <SvgLink />
              </NavLink>
            </li>
            <li className={liCss}>
              <NavLink className={itemCss} to="/showcase">
                BID
              </NavLink>
            </li>
            <li className={liCss}>
              <NavLink className={itemCss} to="/claim">
                CREATOR REWARDS
              </NavLink>
            </li>
            <li className={liCss}>
              <NavLink className={itemCss} to={MAIL}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default MainMenu
