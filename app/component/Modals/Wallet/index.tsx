import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Modal from '@component/Modal'
import useEventModal from '@hook/useEventModal'

import Foot from './Foot'
import Head from './Head'
import Options from './Options'

const WalletModal = () => {
  const { address, isConnected } = useAccount()
  const { isOpen, open, close, callback } = useEventModal('wallet', false)

  useEffect(() => {
    const isEstablished = isAddress(address || '') && isConnected
    if (isEstablished) {
      close()

      if (callback) {
        callback()
      }
    }
  }, [address, isConnected])

  const descCss = 'my-6 t-14 font-normal'

  return (
    <Modal isOpened={isOpen} open={open} close={close}>
      {/* Head */}
      <Head close={close} />

      {/* Content */}
      <section>
        <section className={descCss}>Connect your wallet</section>
        <Options />
      </section>

      {/* Foot */}
      <Foot close={close} />
    </Modal>
  )
}

export default WalletModal
