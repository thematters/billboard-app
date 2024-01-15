import { NavLink } from '@remix-run/react'
import _ from 'lodash'
import { useEffect, useState } from 'react'

import { BREAKPOINTS } from '~/common/constants'
import LinkButton from '~/components/Buttons/LinkButton'
import IconHamburger from '~/components/Icons/Hamburger'
import IconLogo from '~/components/Icons/Logo'
import IconRedirectLink from '~/components/Icons/RedirectLink'

interface Props {
  isActive: boolean
  setActive: (value: boolean) => void
}

const Header = ({ isActive, setActive }: Props) => {
  const click = () => setActive(!isActive)

  useEffect(() => {
    // close menu if screen width is greater than LG
    const handler = _.debounce(() => {
      if (window.innerWidth > BREAKPOINTS.lg && isActive === true) {
        setActive(false)
      }
    }, 100)

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [isActive])

  return (
    <header className="outer fixed top-0 left-0 w-full bg-dim-black z-10">
      <section className="inner py-4 lg:py-8 flex-center-between border-x-green border-b-green dots">
        {/* Logo */}
        <NavLink to="/">
          <IconLogo className="w-[120px] h-[15px] lg:w-[200px] lg:h-[22px]" />
        </NavLink>

        {/* Nav - Buttons */}
        <section className="hidden lg:block lg:flex-center-end">
          <LinkButton color="dim" to="/" otherClass="mr-4 flex-center">
            WHITE PAPER
            <IconRedirectLink className="ml-2.5" width={20} height={20} />
          </LinkButton>
          <LinkButton color="light" to="/showcase">
            SHOWCASE
          </LinkButton>
        </section>

        {/* Nav - Hamburger */}
        <section className="block lg:hidden" onClick={click}>
          <IconHamburger isActive={isActive} />
        </section>
      </section>
    </header>
  )
}

export default Header
