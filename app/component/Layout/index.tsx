import type { ComponentProps } from '@type'

import { useLocation } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Menu from '@component/Menu'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children, css }: ComponentProps) => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    setMenuActive(false)
  }, [location])

  const baseCss = clsx('relative', 'z-0', css)
  return (
    <section className={baseCss}>
      <Header isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      <Main>{children}</Main>
      <Footer />
      <Menu isMenuActive={isMenuActive} />
    </section>
  )
}

export default Layout
