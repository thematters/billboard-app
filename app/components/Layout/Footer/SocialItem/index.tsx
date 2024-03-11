import type { ComponentProps } from '@types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  to: string
}

const SocialItem = ({ children, css, to }: Props) => {
  const baseCss = clsx('px-0 md:px-4 lg:px-0', 'shrink-0', css)

  return (
    <NavLink className={baseCss} to={to} target="_blank">
      {children}
    </NavLink>
  )
}

export default SocialItem
