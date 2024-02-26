import type React from 'react'
import type { ComponentProps } from '~/types'

import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Menu from '~/components/Menu'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }: ComponentProps) => {
  const [isMenuActive, setMenuActive] = useState<boolean>(false)

  const css = clsx('relative', 'z-0')
  return (
    <section className={css}>
      <Header isMenuActive={isMenuActive} setMenuActive={setMenuActive} />
      <Main>{children}</Main>
      <Footer />
      <Menu isMenuActive={isMenuActive} />
    </section>
  )
}

export default Layout
