import clsx from 'clsx'

import LinkButton from '@components/Button/Link'

const Menu = () => {
  const baseCss = clsx('ml-12 hidden ml:block')
  const innerCss = clsx('f-row-cs gap-x-10')

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
            <LinkButton to={link.to}>{link.name}</LinkButton>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Menu
