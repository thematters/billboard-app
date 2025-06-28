import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useAccount } from 'wagmi'

import Box from '@components/Box'

import Connect from './Connect'
import Records from './Records'
import Success from './Success'

const Page = () => {
  const [step, setStep] = useState<ClaimRewardStepType>('records')
  const { address, isConnected } = useAccount()

  useEffect(() => {
    if (!isConnected) {
      if (step !== 'connect') {
        setStep('connect')
      }
      return
    }
    setStep('records')
  }, [address, isConnected])

  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')

  return (
    <Box classes={baseCss}>
      {step === 'connect' && <Connect />}
      {step === 'records' && <Records setStep={setStep} />}
      {step === 'success' && <Success setStep={setStep} />}
    </Box>
  )
}

export default Page
