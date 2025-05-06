import useModal from '@hooks/useModal'

import Base from '../Base'

import Options from './Options'

const WalletModal = () => {
  return (
    <Base id="wallet" title="Connect Wallet">
      <Options />
    </Base>
  )
}

export default WalletModal
