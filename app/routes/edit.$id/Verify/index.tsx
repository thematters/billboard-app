import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import useQuery from '@hooks/useQuery'
import useQueryParams from '@hooks/useQueryParams'

import Loader from '../Loader'

type PropsType = {
  setStep: (value: EditStepType) => void
}

const Verify = ({ setStep }: PropsType) => {
  const { id } = useQueryParams()
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
