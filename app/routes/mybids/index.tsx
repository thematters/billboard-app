import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import Box from '@components/Box'

import Bids from './Bids'
import Connect from './Connect'

const Page = () => {
  const [step, setStep] = useState<MyBidsStepType>('bids')
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (!isConnected) {
      if (step !== 'connect') {
        setStep('connect')
      }
      return
    }

    setStep('bids')
  }, [address, isConnected])

  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')

  return (
    <Box classes={baseCss}>
      {step === 'connect' && <Connect />}
      {step === 'bids' && <Bids />}
    </Box>
  )
}

export default Page
