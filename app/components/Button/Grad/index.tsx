import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type PropsType = ComponentPropsType & {
  outerClasses?: string
  color: 'green' | 'dim-green'
  type: 'button' | 'link'
  shape?: 'general' | 'circle'
  to?: string
  target?: string
  disabled?: boolean
  onClick?: (params?: Anything) => void
}

const GradButton = ({
  children,
  classes,
  outerClasses,
  color,
  type,
  shape = 'general',
  to,
  target = '_blank',
  disabled,
  onClick,
}: PropsType) => {
  const click = onClick ? throttle(onClick, 500, { trailing: false }) : () => {}

  const sharedCss = clsx('cursor-pointer', {
    'rounded-xl': shape === 'general',
    'rounded-full': shape === 'circle',
  })

  const baseCss = clsx(
    sharedCss,
    'w-fit cursor-pointer p-[1px]',
    {
      'grad-green-button-border': color === 'green',
      'grad-dim-green-button-border': color === 'dim-green',
      disabled,
    },
    outerClasses
  )
  const buttonCss = clsx(
    sharedCss,
    {
      'grad-green-button': color === 'green',
      'grad-dim-green-button': color === 'dim-green',
    },
    classes
  )

  if (type === 'link' && to) {
    return (
      <div className={baseCss}>
        <NavLink className={buttonCss} to={to} target={target}>
          {children}
        </NavLink>
      </div>
    )
  }

  return (
    <div className={baseCss}>
      <button className={buttonCss} disabled={disabled} onClick={click}>
        {children}
      </button>
    </div>
  )
}

export default GradButton
