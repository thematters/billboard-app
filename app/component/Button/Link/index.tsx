import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  color: 'dim' | 'grass'
  to: string
  target?: string
}

const LinkButton = ({ children, css, color, to, target }: Props) => {
  const baseCss = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    css
  )
  return (
    <NavLink className="w-fit" to={to} target={target}>
      <button className={baseCss}>{children}</button>
    </NavLink>
  )
}

export default LinkButton
