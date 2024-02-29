import type { ComponentProps } from '~/types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentProps & {
  to: string
}

const SocialItem = ({ children, customCss, to }: Props) => {
  const css = clsx('px-0 md:px-4 lg:px-0', 'shrink-0', customCss)

  return (
    <NavLink className={css} to={to} target="_blank">
      {children}
    </NavLink>
  )
}

export default SocialItem
