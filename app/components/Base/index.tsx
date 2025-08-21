import { useLocation } from '@remix-run/react'
import { useEffect } from 'react'

import Alert from '@components/Alert'
import MeDrawer from '@components/Drawer/MeDrawer'
import MenuDrawer from '@components/Drawer/MenuDrawer'
import WalletModal from '@components/Modal/WalletModal'
import WhitelistModal from '@components/Modal/WhitelistModal'
import useDrawer from '@hooks/useDrawer'
import useModal from '@hooks/useModal'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Base = ({ children }: ComponentPropsType) => {
  const location = useLocation()
  const { reset: resetDrawer } = useDrawer()
  const { reset: resetModal } = useModal()

  useEffect(() => {
    resetDrawer()
    resetModal()
  }, [location])

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <MeDrawer />
      <MenuDrawer />
      <WalletModal />
      <WhitelistModal />
      <Alert />
    </>
  )
}

export default Base
