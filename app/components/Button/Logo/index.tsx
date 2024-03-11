import { NavLink } from '@remix-run/react'

import SvgLogo from '@svgs/Logo'

const Logo = () => (
  <NavLink to="/">
    <SvgLogo css="logo" />
  </NavLink>
)

export default Logo
