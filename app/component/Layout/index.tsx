import type { ComponentProps } from '@type'

import { useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'

import MainMenu from '@component/Menu/Main'
import MeMenu from '@component/Menu/Me'
import WalletModal from '@component/Modals/Wallet'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }: ComponentProps) => {
  const [isMeMenuActive, setMeMenuActive] = useState<boolean>(false)
  const [isMainMenuActive, setMainMenuActive] = useState<boolean>(false)
  const location = useLocation()

  useEffect(() => {
    if (isMeMenuActive) {
      setMeMenuActive(false)
    }

    if (isMainMenuActive) {
      setMainMenuActive(false)
    }
  }, [location])

  const baseCss = 'relative z-0'
  return (
    <section className={baseCss}>
      <Header
        isMeMenuActive={isMeMenuActive}
        setMeMenuActive={setMeMenuActive}
        isMainMenuActive={isMainMenuActive}
        setMainMenuActive={setMainMenuActive}
      />
      <MeMenu isActive={isMeMenuActive} setActive={setMeMenuActive} />
      <MainMenu isActive={isMainMenuActive} />
      <WalletModal />
      <Main>{children}</Main>
      <Footer />
    </section>
  )
}

export default Layout
