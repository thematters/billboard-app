import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Crate from '@component/Crate'
import useEnvs from '@hook/useEnvs'
import { publish } from '@util/event'

import Bids from './Bids'
import Connect from './Connect'
import Retracted from './Retracted'

const MyBids = () => {
  const [step, setStep] = useState('mybids')
  const { address, isConnected } = useAccount()

  const isEstablished = isAddress(address || '') && isConnected

  const openWalletModal = () => publish('wallet-open', {})

  useEffect(() => {
    if (!isEstablished) {
      if (step !== 'connect') {
        setStep('connect')
      }
      return
    }

    setStep('bids')
  }, [address, isConnected])

  const innerCss = 'py-10 lg:py-20'
  const baseCss = 'lg:pb-20 max-limit'

  return (
    <Crate css="menu-spacing">
      <Crate.Inner css={innerCss} hasDots hasXBorder>
        {step === 'connect' && <Connect open={openWalletModal} />}
        {step === 'bids' && <Bids setParentStep={setStep} />}
        {step === 'retracted' && (
          <Retracted address={address} setParentStep={setStep} />
        )}
      </Crate.Inner>
    </Crate>
  )
}

export default MyBids
