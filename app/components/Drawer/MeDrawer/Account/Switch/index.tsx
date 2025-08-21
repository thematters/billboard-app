import clsx from 'clsx'
import { useDisconnect } from 'wagmi'

import useDrawer from '@hooks/useDrawer'
import useModal from '@hooks/useModal'

const Switch = () => {
  const { disconnect } = useDisconnect()
  const { close } = useDrawer()
  const { open } = useModal()

  const switchWallet = async () => {
    disconnect()
    close('me', open('wallet'))
  }

  const baseCss = clsx('mt-2 text-xs text-gray-30')

  return (
    <button className={baseCss} onClick={switchWallet}>
      Switch Wallet
    </button>
  )
}

export default Switch
