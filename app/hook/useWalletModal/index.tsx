import { useContext } from 'react'

import { WalletModalContextSource } from '@component/Context/WalletModal'

const useWalletModal = () => {
  const context = useContext(WalletModalContextSource)
  return context
}

export default useWalletModal
