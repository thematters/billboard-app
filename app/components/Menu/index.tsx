import { NavLink } from '@remix-run/react'

import Crate from '~/components/Crate'
import IconRedirectLink from '~/components/Icons/RedirectLink'

interface MenuProps {
  isActive: boolean
}

const Menu = ({ isActive }: MenuProps) => {
  const outer = [
    'block lg:hidden',
    'fixed left-0 top-[57px] z-10 overflow-hidden',
    'w-screen bg-dim-black',
    'transition-all ease-in-out transform duration-400',
    isActive
      ? 'h-[calc(100vh-57px)] transition-opacity opacity-100'
      : 'h-0 opacity-0',
  ].join(' ')

  const item = 'text-sm border-b-green hover:text-light-green'
  const link = 'w-full p-4 flex'

  return (
    <Crate
      color="dim"
      outerClass={outer}
      innerClass="px-0 h-[calc(100vh-57px)] border-x-green"
      hasDots
    >
      <nav className="list-none">
        <li className={item}>
          <NavLink
            className={`${link} flex-center-between`}
            to="/"
            target="_blank"
          >
            WHITE PAPER
            <IconRedirectLink width={20} height={20} />
          </NavLink>
        </li>
        <li className={item}>
          <NavLink className={link} to="/showcase">
            SHOWCASE
          </NavLink>
        </li>
        <li className={item}>
          <NavLink className={link} to="mailto:hi@matters.town">
            Contact Us
          </NavLink>
        </li>
      </nav>
    </Crate>
  )
}

export default Menu
