import type { ModalControls } from '@type'

import { useFetcher } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import { useAccount, useDisconnect } from 'wagmi'

import Crate from '@component/Crate'
import useWalletModal from '@hook/useWalletModal'

import Claimed from './Claimed'
import Empty from './Empty'
import Error from './Error'
import Greet from './Greet'
import Records from './Records'
import Skeleton from './Skeleton'

const Claim = () => {
  const [step, setStep] = useState('greeting')
  const { isOpen, openModal } = useWalletModal()
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()

  const api = useFetcher()
  const data = api?.data as Record<string, any>
  const isEstablished = isAddress(address || '') && isConnected

  useEffect(() => {
    if (!isEstablished) {
      if (step !== 'greeting') {
        setStep('greeting')
      }
      return
    }

    setStep('loading')
    api.submit({ address } as Record<string, any>, {
      method: 'GET',
      action: '/api/unclaim',
    })
  }, [address, isConnected])

  useEffect(() => {
    if (!isEstablished) {
      return
    }

    const apiState = api?.state
    // @ts-ignore
    const dataState = api?.data?.state
    // @ts-ignore
    const dataCount = api?.data?.count
    if (apiState === 'loading') {
      setStep('loading')
    } else if (apiState === 'idle' && dataState === 'error') {
      setStep('error')
    } else if (apiState === 'idle' && dataState === 'successful') {
      if (!dataCount || dataCount === 0) {
        setStep('empty')
      } else {
        setStep('claim')
      }
    }
  }, [api])

  const innerCss = 'py-10 lg:py-20'

  return (
    <Crate css="menu-spacing">
      <Crate.Inner css={innerCss} hasDots hasXBorder>
        {step === 'greeting' && <Greet openModal={openModal} />}
        {step === 'loading' && <Skeleton />}
        {step === 'claim' && (
          <Records data={data?.items || []} callback={setStep} />
        )}
        {step === 'claimed' && <Claimed click={disconnect} />}
        {step === 'empty' && <Empty click={disconnect} />}
        {step === 'error' && <Error click={disconnect} />}
      </Crate.Inner>
    </Crate>
  )
}

export default Claim
