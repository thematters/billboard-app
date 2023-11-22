import type React from 'react'

import { NavLink } from '@remix-run/react'

interface Props {
  children: React.ReactNode
  color: 'dim' | 'light'
  otherClass?: string
  to: string
}

const LinkButton: React.FC<Props> = ({ children, color, otherClass, to }) => {
  const inner = [
    'btn-basis',
    color === 'light' ? 'btn-light' : 'btn-dim',
    otherClass,
  ].join(' ')

  return (
    <NavLink to={to}>
      <button className={inner}>{children}</button>
    </NavLink>
  )
}

export default LinkButton
