import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import UserSvg from '@components/Svg/User'
import useDrawer from '@hooks/useDrawer'

const Me = () => {
  const { open } = useDrawer()
  const click = () => open('me')

  const baseCss = clsx('f-row-cc size-8 md:size-10')

  return (
    <GradButton
      classes={baseCss}
      color="green"
      type="button"
      shape="circle"
      onClick={click}
    >
      <UserSvg />
    </GradButton>
  )
}

export default Me
