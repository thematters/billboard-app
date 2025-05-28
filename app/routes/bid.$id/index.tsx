import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import Box from '@components/Box'

import Connect from './Connect'
import Unauthed from './Unauthed'
import Verify from './Verify'

const Page = () => {
  const [step, setStep] = useState('connect')
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
    </Box>
  )
}

export default Page
