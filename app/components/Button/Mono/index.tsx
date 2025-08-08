import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type PropsType = ComponentPropsType & {
  color: 'gray' | 'dim-gray' | 'black'
  type: 'button' | 'link'
  shape?: 'general' | 'circle'
  to?: string
  target?: string
  disabled?: boolean
  onClick?: () => void
}

const MonoButton = ({
  children,
  classes,
  color,
  type,
  shape = 'general',
  to,
  target = '_blank',
  disabled,
  onClick,
}: PropsType) => {
  const click = onClick ? throttle(onClick, 500, { trailing: false }) : () => {}

  const baseCss = clsx(
    'w-fit cursor-pointer',
    {
      'rounded-xl': shape === 'general',
      'rounded-full': shape === 'circle',
      'mono-gray-button': color === 'gray',
      'mono-dim-gray-button': color === 'dim-gray',
      disabled,
    },
    classes
  )

  if (type === 'link' && to) {
    return (
      <NavLink className={baseCss} to={to} target={target}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={baseCss} disabled={disabled} onClick={click}>
      {children}
    </button>
  )
}

export default MonoButton
