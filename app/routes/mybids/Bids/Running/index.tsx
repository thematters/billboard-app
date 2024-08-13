import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import ErrorMessage from '@component/Error'
import useQueryData from '@hook/useQueryData'
import SvgLoaderMyBidsMD from '@svg/Loader/MyBidsMD'
import SvgLoaderMyBidsSM from '@svg/Loader/MyBidsSM'

import Bid from './Bid'

const Running = () => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, refetch } = useQueryData({
    action: '/api/bids/running',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const runningBids = data?.runningBids || []
  const upcomingBids = data?.upcomingBids || []
  const isEmpty = runningBids.length === 0 && upcomingBids.length === 0

  useEffect(() => {
    refetch({ ...(isEstablished ? { address } : {}) })
  }, [address])

  const baseCss = 'mt-6'
  const emptyCss = 'p-5 bg-black text-center'
  const loaderSMCss = 'w-full md-hidden'
  const loaderMDCss = 'w-full md-shown'

  return (
    <div className={baseCss}>
      {runningBids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} state="running" data={data} />
      ))}
      {upcomingBids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} state="upcoming" data={data} />
      ))}
      {(isLoading || isError) && (
        <>
          <SvgLoaderMyBidsSM css={loaderSMCss} />
          <SvgLoaderMyBidsMD css={loaderMDCss} />
          {isError && <ErrorMessage message={data.error || data.code} />}
        </>
      )}
      {isLoaded && isEmpty && (
        <div className={emptyCss}>
          No running and upcoming bids at the moment.
        </div>
      )}
    </div>
  )
}

export default Running
