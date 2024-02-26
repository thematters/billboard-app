import type { ComponentProps } from '~/types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  color: 'dim' | 'grass'
  to: string
}

const LinkButton = ({ children, customCss, color, to }: Props) => {
  const css = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    customCss
  )
  return (
    <NavLink to={to}>
      <button className={css}>{children}</button>
    </NavLink>
  )
}

export default LinkButton
