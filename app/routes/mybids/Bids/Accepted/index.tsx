import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import useQuery from '@hooks/useQuery'

import Loader from '../Loader'

import Rows from './Rows'

const Accepted = () => {
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError, refetch } = useQuery({
    action: '/api/bids/accepted',
    params: { ...(isConnected ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    refetch({ ...(isConnected ? { address } : {}) })
  }, [address, isConnected])

  return (
    <>
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {isLoaded && <Rows data={data || {}} />}
    </>
  )
}

export default Accepted
