import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import useQueryData from '@hook/useQueryData'
import SvgSpinner from '@svg/Spinner'

import Bid from './Bid'

const Running = () => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, submit } = useQueryData({
    action: '/api/bids/running',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const runningBids = data?.runningBids || []
  const upcomingBids = data?.upcomingBids || []
  const isEmpty = runningBids.length === 0 && upcomingBids.length === 0

  useEffect(() => {
    submit(
      { ...(isEstablished ? { address } : {}) },
      { method: 'GET', action: '/api/bids/running' }
    )
  }, [address])

  const baseCss = 'mt-6'
  const emptyCss = 'p-5 bg-black text-center'
  const spinnerCss = 'my-12 mx-auto animate-spin'

  if (isLoading) {
    return <SvgSpinner css={spinnerCss} width={48} height={48} />
  }

  return (
    <div className={baseCss}>
      {runningBids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} state="running" data={data} />
      ))}
      {upcomingBids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} state="upcoming" data={data} />
      ))}
      {isEmpty && (
        <div className={emptyCss}>
          No running and upcoming bids at the moment.
        </div>
      )}
    </div>
  )
}

export default Running
