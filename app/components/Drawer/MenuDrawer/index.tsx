import useDrawer from '@hooks/useDrawer'

import Base from '../Base'

import Contact from './Contact'
import Menu from './Menu'

const MenuDrawer = () => {
  const { close } = useDrawer()

  const baseCss = 'fs'

  return (
    <Base id="menu" classes={baseCss}>
      <Menu close={() => close('menu')} />
      <Contact />
    </Base>
  )
}

export default MenuDrawer
