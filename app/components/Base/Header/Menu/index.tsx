import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

const Menu = () => {
  const baseCss = 'ml-12 hidden ml:block'
  const innerCss = clsx('flc gap-x-10 font-semibold [&>li]:hover-link')

  const links = [
    { to: '/bid', name: 'Bid' },
    { to: '/enlist', name: 'Enlist' },
    { to: '/learn', name: 'Learn' },
    { to: '/rewards', name: 'Creator Rewards' },
  ]

  return (
    <nav className={baseCss}>
      <ul className={innerCss}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink to={link.to}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
