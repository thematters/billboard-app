import useDrawer from '@hooks/useDrawer'

import Base from '../Base'

import Menu from './Menu'

const MenuDrawer = () => {
  const { close } = useDrawer()
  return (
    <Base id="menu">
      <Menu close={() => close('menu')} />
    </Base>
  )
}

export default MenuDrawer
