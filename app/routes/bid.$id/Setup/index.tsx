import { useAccount } from 'wagmi'

import useQuery from '@hooks/useQuery'
import useQueryParams from '@hooks/useQueryParams'

import Loader from '../Loader'

import SetBid from './SetBid'

type PropsType = {
  setStep: (value: BidStepType) => void
}

const Setup = ({ setStep }: PropsType) => {
  const { id, epoch } = useQueryParams()
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError } = useQuery({
    action: '/api/bid',
    params: { id, ...(isConnected ? { address } : {}), epoch },
    auto: true,
  })

  return (
    <>
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {isLoaded && <SetBid data={data} setStep={setStep} />}
    </>
  )
}

export default Setup
