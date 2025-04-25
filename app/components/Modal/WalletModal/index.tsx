import useModal from '@hooks/useModal'

import Base from '../Base'

const WalletModal = () => {
  const { close } = useModal()

  return (
    <Base id="wallet">
      <section onClick={() => close('wallet')}>
        Modal Wallet
        <br />
        <br />
        <br />
      </section>
    </Base>
  )
}

export default WalletModal
