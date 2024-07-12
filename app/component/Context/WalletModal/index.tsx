import { ModalControls } from '@type'
import type React from 'react'

import { createContext } from 'react'

import useModal from '@hook/useModal'

type Props = {
  children: React.ReactNode
}

export const WalletModalContextSource = createContext({} as ModalControls)

const WalletModalContext = ({ children }: Props) => {
  const controls = useModal(false)

  return (
    <WalletModalContextSource.Provider value={controls}>
      {children}
    </WalletModalContextSource.Provider>
  )
}

export default WalletModalContext
