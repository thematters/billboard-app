import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import LeaveSvg from '@components/Svg/Leave'

type Props = {
  close: () => void
}

const Menu = ({ close }: Props) => {
  const innerCss = clsx('space-y-4 text-xl font-semibold [&>li>a]:hover-link')
  const firstCss = clsx('fsc')
  const leaveCss = clsx('cursor-pointer')

  const links = [
    { to: '/bid', name: 'Bid' },
    { to: '/enlist', name: 'Enlist' },
    { to: '/learn', name: 'Learn' },
    { to: '/rewards', name: 'Rewards' },
  ]

  return (
    <nav>
      <ul className={innerCss}>
        {links.map((link) => (
          <li key={link.to} className={link.to === '/bid' ? firstCss : ''}>
            <NavLink to={link.to} onClick={close}>
              {link.name}
            </NavLink>
            {link.to === '/bid' && (
              <div onClick={close}>
                <LeaveSvg classes={leaveCss} />
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
