import type { ComponentProps } from '@type'

import { useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import MainMenu from '@component/Menu/Main'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children, css }: ComponentProps) => {
  const [isMeMenuActive, setMeMenuActive] = useState<boolean>(false)
  const [isMainMenuActive, setMainMenuActive] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    setMainMenuActive(false)
  }, [location])

  const baseCss = clsx('relative', 'z-0', css)
  return (
    <section className={baseCss}>
      <Header
        isMainMenuActive={isMainMenuActive}
        setMainMenuActive={setMainMenuActive}
      />
      <Main>{children}</Main>
      <Footer />
      <MainMenu isMenuActive={isMainMenuActive} />
    </section>
  )
}

export default Layout
