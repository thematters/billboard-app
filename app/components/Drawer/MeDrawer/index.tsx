import useDrawer from '@hooks/useDrawer'

import Base from '../Base'

import Account from './Account'
import Menu from './Menu'

const MeDrawer = () => {
  const { close } = useDrawer()

  const baseCss = 'f-col-sb'

  return (
    <Base id="me" classes={baseCss}>
      <Menu close={() => close('me')} />
      <Account />
    </Base>
  )
}

export default MeDrawer
