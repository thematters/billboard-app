import type { ComponentProps } from '@types'

import clsx from 'clsx'

type Props = ComponentProps & {
  color: 'dim' | 'grass'
  disabled?: boolean
  click?: () => void
}

const BaseButton = ({ children, css, color, disabled, click }: Props) => {
  const baseCss = clsx(
    'btn-base',
    {
      'btn-dim': color === 'dim',
      'btn-grass': color === 'grass',
    },
    css
  )
  return (
    <button className={baseCss} disabled={disabled} onClick={click}>
      {children}
    </button>
  )
}

export default BaseButton
