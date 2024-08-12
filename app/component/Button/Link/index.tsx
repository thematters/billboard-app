import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  linkCss?: string
  color: 'dim' | 'grass'
  click?: () => void
  to: string
  target?: string
}

const LinkButton = ({
  children,
  css,
  linkCss,
  color,
  click,
  to,
  target,
}: Props) => {
  const baseCss = clsx('w-fit', linkCss)

  const btnCss = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    css
  )
  return (
    <NavLink className={baseCss} to={to} target={target} onClick={click}>
      <button className={btnCss}>{children}</button>
    </NavLink>
  )
}

export default LinkButton
