import type { ComponentProps } from '~/types'

import clsx from 'clsx'

type Props = ComponentProps & {
  color: 'dim' | 'grass'
  click?: () => void
}

const BaseButton = ({ children, customCss, color, click }: Props) => {
  const css = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    customCss
  )
  return (
    <button className={css} onClick={click}>
      {children}
    </button>
  )
}

export default BaseButton
