import { NavLink } from '@remix-run/react'

import SvgLogo from '@svg/Logo'

const Logo = () => (
  <NavLink to="/">
    <SvgLogo css="logo" />
  </NavLink>
)

export default Logo
