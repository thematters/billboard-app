import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgLogo from '~/components/Svgs/Logo'

const Logo = () => {
  const css = clsx('h-[15px] w-[120px]', 'lg:h-[19px] lg:w-[200px]')
  return (
    <NavLink to="/">
      <SvgLogo customCss={css} />
    </NavLink>
  )
}

export default Logo
