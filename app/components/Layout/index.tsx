import type React from 'react'

import { useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'

import Menu from '~/components/Menu'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isActive, setActive] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    setActive(false)
  }, [location])

  return (
    <section className="relative z-0">
      <Header isActive={isActive} setActive={setActive} />
      <Main>{children}</Main>
      <Footer />
      <Menu isActive={isActive} />
    </section>
  )
}

export default Layout
