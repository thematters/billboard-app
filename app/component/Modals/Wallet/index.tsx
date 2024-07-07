import type { ComponentProps } from '@type'

import Modal from '@component/Modal'

import Foot from './Foot'
import Head from './Head'
import Options from './Options'

type Props = ComponentProps & {
  isOpened: boolean
  open: () => void
  close: () => void
}

const WalletModal = ({ children, isOpened, open, close }: Props) => {
  const descCss = 'my-6 t-14 font-normal'

  return (
    <Modal isOpened={isOpened} open={open} close={close}>
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
