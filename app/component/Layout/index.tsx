import type { ComponentProps } from '@type'

import { useLocation } from '@remix-run/react'
import { useEffect, useState } from 'react'

import MainMenu from '@component/Menu/Main'
import MeMenu from '@component/Menu/Me'
import WalletModal from '@component/Modals/Wallet'
import useWalletModal from '@hook/useWalletModal'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout = ({ children }: ComponentProps) => {
  const [isMeMenuActive, setMeMenuActive] = useState<boolean>(false)
  const [isMainMenuActive, setMainMenuActive] = useState<boolean>(false)
  const location = useLocation()
  const { isOpen, openModal, closeModal } = useWalletModal()

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
      <Main>{children}</Main>
      <Footer />
      <MeMenu isActive={isMeMenuActive} />
      <MainMenu isActive={isMainMenuActive} />
      <WalletModal isOpen={isOpen} open={openModal} close={closeModal} />
    </section>
  )
}

export default Layout
