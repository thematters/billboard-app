import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import Box from '@components/Box'

import Connect from './Connect'
import Setup from './Setup'
import Success from './Success'
import Unauthed from './Unauthed'
import Verify from './Verify'

const Page = () => {
  const [step, setStep] = useState<BidStepType>('connect')
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (!isConnected) {
      if (step !== 'connect') {
        setStep('connect')
      }
      return
    }

    setStep('verify')
  }, [address, isConnected])

  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')

  return (
    <Box classes={baseCss}>
      {step === 'connect' && <Connect />}
      {step === 'verify' && <Verify setStep={setStep} />}
      {step === 'unauthed' && <Unauthed />}
      {step === 'setup' && <Setup setStep={setStep} />}
      {step === 'success-new' && <Success isNewBid={true} />}
      {step === 'success-update' && <Success isNewBid={false} />}
    </Box>
  )
}

export default Page
