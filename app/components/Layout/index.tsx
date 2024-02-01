import type React from 'react'

import clsx from 'clsx'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const css = clsx('relative', 'z-0')
  return (
    <section className={css}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </section>
  )
}

export default Layout
