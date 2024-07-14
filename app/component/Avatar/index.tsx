import type { ComponentProps } from '@type'

import clsx from 'clsx'
import { useState } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import { BREAKPOINT } from '@constant'
import ButtonBase from '@component/Button/Base'
import useWalletModal from '@hook/useWalletModal'
import SvgAvatar from '@svg/Avatar'
import SvgCross from '@svg/Cross'

type Props = ComponentProps & {
  menuClick: () => void
  isMenuActive: boolean
}

const Avatar = ({ menuClick, isMenuActive }: Props) => {
  const { openModal } = useWalletModal()
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const btnCss = clsx('btn-base p-1 sm:p-2', {
    'btn-grass': isEstablished,
    'btn-dim': !isEstablished,
  })

  const onClick = () => {
    if (!isEstablished) {
      openModal()
      return
    }

    if (window.innerWidth > BREAKPOINT.lg) {
      // open dropdown
    } else {
      menuClick()
    }
  }

  return (
    <>
      <button className={btnCss} onClick={onClick}>
        {isMenuActive === true ? <SvgCross css="rotate-45" /> : <SvgAvatar />}
      </button>
    </>
  )
}

export default Avatar
