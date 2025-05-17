import clsx from 'clsx'

import LinkButton from '@components/Button/Link'
import LeaveSvg from '@components/Svg/Leave'

type PropsType = {
  close: () => void
}

const Menu = ({ close }: PropsType) => {
  const innerCss = clsx('space-y-4 text-xl')
  const firstCss = clsx('f-row-cb')
  const leaveCss = clsx('cursor-pointer')

  const links = [
    { to: '/inbox', name: 'Inbox' },
    { to: '/bids', name: 'Bids' },
    { to: '/rewards', name: 'Rewards' },
  ]

  return (
    <nav>
      <ul className={innerCss}>
        {links.map((link) => (
          <li key={link.to} className={link.to === '/inbox' ? firstCss : ''}>
            <LinkButton to={link.to} onClick={close}>
              {link.name}
            </LinkButton>
            {link.to === '/inbox' && (
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
