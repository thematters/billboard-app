import type { ComponentProps } from '@type'

import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Modal from '@component/Modal'

import Foot from './Foot'
import Head from './Head'
import Options from './Options'

type Props = ComponentProps & {
  isOpen: boolean
  open: () => void
  close: () => void
}

const WalletModal = ({ children, isOpen, open, close }: Props) => {
  const { address, isConnected } = useAccount()

  useEffect(() => {
    const isEstablished = isAddress(address || '') && isConnected
    if (isEstablished) {
      close()
    }
  }, [address, isConnected])

  const descCss = 'my-6 t-14 font-normal'

  return (
    <Modal isOpened={isOpen} open={open} close={close}>
      {/* Head */}
      <Head close={close} />

      {/* Content */}
      <section>
        <section className={descCss}>
          Before claiming funding, please connect your wallet.
        </section>
        <Options />
      </section>

      {/* Foot */}
      <Foot close={close} />
    </Modal>
  )
}

export default WalletModal
