import type { ComponentProps } from '~/types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import { MAIL_TO } from '~/common/constants'
import Crate from '~/components/Crate'
import SvgLink from '~/components/Svgs/Link'

type Props = ComponentProps & {
  isMenuActive: boolean
}

const Menu = ({ children, customCss, isMenuActive }: Props) => {
  const crateCss = clsx('lg:hidden', 'menu', {
    'menu-active': isMenuActive,
    'menu-inactive': !isMenuActive,
  })

  const innerCss = clsx({
    'menu-active': isMenuActive,
    'menu-inactive': !isMenuActive,
  })

  const liCss = clsx('p-4', 't-14', 'b-b-green', 'text-white hover:text-grass')

  const aCss = clsx('w-full', 'f-center-between')

  return (
    <Crate customCss={crateCss}>
      <Crate.Inner customCss={innerCss} hasDots hasXBorder hasXSpacing={false}>
        <nav className="list-none">
          <li className={liCss}>
            <NavLink className={aCss} to="/" target="_blank">
              WHITE PAPER
              <SvgLink />
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={aCss} to="/showcase">
              SHOWCASE
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={aCss} to="/claim">
              CLAIM
            </NavLink>
          </li>
          <li className={liCss}>
            <NavLink className={aCss} to={MAIL_TO}>
              CONTACT US
            </NavLink>
          </li>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default Menu
