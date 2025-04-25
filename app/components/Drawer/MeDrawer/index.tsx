import useDrawer from '@hooks/useDrawer'

import Base from '../Base'

const MeDrawer = () => {
  const { close } = useDrawer()
  return (
    <Base id="me">
      <section onClick={() => close('menu')}>Drawer Me</section>
    </Base>
  )
}

export default MeDrawer
