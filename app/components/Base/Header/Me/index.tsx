import clsx from 'clsx'

import BaseButton from '@components/Button/Base'
import UserSvg from '@components/Svg/User'

const Me = () => {
  const baseCss = clsx('f-row-cc size-8 rounded-full md:size-10')

  return (
    <BaseButton classes={baseCss} color="green" onClick={() => {}}>
      <UserSvg />
    </BaseButton>
  )
}

export default Me
