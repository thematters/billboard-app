import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

type PropsType = ComponentPropsType & {
  to: string
  onClick?: () => void
}

const LinkButton = ({ children, classes, to, onClick }: PropsType) => {
  const baseCss = clsx('link-button', classes)

  return (
    <NavLink className={baseCss} to={to} onClick={onClick}>
      {children}
    </NavLink>
  )
}

export default LinkButton
