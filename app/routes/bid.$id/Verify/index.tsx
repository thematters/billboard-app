import { useParams } from '@remix-run/react'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import useQuery from '@hooks/useQuery'

import Loader from '../Loader'

type PropsType = {
  setStep: (value: BidStepType) => void
}

const Verify = ({ setStep }: PropsType) => {
  const { id } = useParams()
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError } = useQuery({
    action: '/api/verify',
    params: { id, ...(isConnected ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    if (!isLoaded || isError) {
      return
    }

    if (data?.whitelisted === true) {
      setStep('setup')
    } else {
      setStep('unauthed')
    }
  }, [data])

  return (
    <section>
      <Loader data={data} isLoading={isLoading} isError={isError} />
    </section>
  )
}

export default Verify
