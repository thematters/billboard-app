import type { ComponentProps } from '@types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  color: 'dim' | 'grass'
  to: string
}

const LinkButton = ({ children, css, color, to }: Props) => {
  const baseCss = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    css
  )
  return (
    <NavLink to={to}>
      <button className={baseCss}>{children}</button>
    </NavLink>
  )
}

export default LinkButton
