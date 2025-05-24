import clsx from 'clsx'

import LinkButton from '@components/Button/Link'
import LeaveSvg from '@components/Svg/Leave'
import useAppEnv from '@hooks/useAppEnv'

type PropsType = {
  close: () => void
}

const Menu = ({ close }: PropsType) => {
  const { tokenIdShowCase: id } = useAppEnv()

  const innerCss = clsx('space-y-4 text-xl')
  const firstCss = clsx('f-row-cb')
  const leaveCss = clsx('cursor-pointer')

  const links = [
    { to: `/board/${id}`, name: 'Bid' },
    { to: '/enlist', name: 'Enlist' },
    { to: '/learn', name: 'Learn' },
    { to: '/rewards', name: 'Rewards' },
  ]

  return (
    <nav>
      <ul className={innerCss}>
        {links.map((link) => (
          <li key={link.to} className={link.name === 'Bid' ? firstCss : ''}>
            <LinkButton to={link.to} onClick={close}>
              {link.name}
            </LinkButton>
            {link.name === 'Bid' && (
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
