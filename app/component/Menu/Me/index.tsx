import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Crate from '@component/Crate'
import useLockScroll from '@hook/useLockScroll'

type Props = ComponentProps & {
  isActive: boolean
}

const MeMenu = ({ css, isActive }: Props) => {
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
            <NavLink className={linkCss} to="">
              MY BIDS
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={linkCss} to="">
              DISCONNECT
            </NavLink>
          </li>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default MeMenu
