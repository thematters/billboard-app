import type { ComponentProps } from '@type'

import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgAvatar from '@svg/Avatar'

type Props = ComponentProps & {
  onClick: () => void
  isMenuActive: boolean
}

const Avatar = ({ css, onClick, isMenuActive }: Props) => {
  const baseCss = clsx('p-1 sm:p-2', css)

  return (
    <ButtonBase css={baseCss} color={isMenuActive ? 'grass' : 'dim'}>
      <SvgAvatar />
    </ButtonBase>
  )
}

export default Avatar
