import Alert from '@components/Alert'
import MeDrawer from '@components/Drawer/MeDrawer'
import MenuDrawer from '@components/Drawer/MenuDrawer'
import WalletModal from '@components/Modal/WalletModal'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Base = ({ children }: ComponentPropsType) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <MeDrawer />
      <MenuDrawer />
      <WalletModal />
      <Alert />
    </>
  )
}

export default Base
