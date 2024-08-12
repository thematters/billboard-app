import { useSearchParams } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Crate from '@component/Crate'
import useEnvs from '@hook/useEnvs'
import { publish, subscribe, unsubscribe } from '@util/event'

import Act from './Act'
import Apply from './Apply'
import Connect from './Connect'
import Error from './Error'
import Failed from './Failed'
import Success from './Success'
import Updated from './Updated'
import Verify from './Verify'

const Bid = () => {
  const [searchParams] = useSearchParams()
  const [step, setStep] = useState('connect')
  const { address, isConnected } = useAccount()

  const id = searchParams.get('id') || ''
  const epoch = searchParams.get('epoch') || ''
  const isEstablished = isAddress(address || '') && isConnected

  const openWalletModal = () => publish('wallet-open', {})
  const retry = () => setStep('verify')

  useEffect(() => {
    if (!isEstablished) {
      if (step !== 'connect') {
        setStep('connect')
      }
      return
    }

    setStep('verify')
  }, [address, isConnected])

  const innerCss = 'py-10 lg:py-20'

  return (
    <Crate css="menu-spacing">
      <Crate.Inner css={innerCss} hasDots hasXBorder>
        {step === 'connect' && <Connect open={openWalletModal} />}
        {step === 'apply' && <Apply />}
        {step === 'verify' && (
          <Verify id={id} address={address} setParentStep={setStep} />
        )}
        {step === 'act' && (
          <Act
            id={id}
            epoch={epoch}
            address={address}
            setParentStep={setStep}
          />
        )}
        {step === 'success' && <Success />}
        {step === 'updated' && <Updated />}
        {step === 'error' && <Error retry={retry} />}
        {step === 'failed' && <Failed retry={retry} />}
      </Crate.Inner>
    </Crate>
  )
}

export default Bid
