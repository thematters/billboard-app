import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import ErrorMessage from '@component/Error'
import useQueryData from '@hook/useQueryData'
import SvgLoaderMyBidsMD from '@svg/Loader/MyBidsMD'
import SvgLoaderMyBidsSM from '@svg/Loader/MyBidsSM'

import Bid from './Bid'

const Bidding = () => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, refetch } = useQueryData({
    action: '/api/bids/bidding',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const bids = data?.bids || []
  const isEmpty = bids.length === 0

  useEffect(() => {
    refetch({ ...(isEstablished ? { address } : {}) })
  }, [address])

  const baseCss = 'mt-6'
  const emptyCss = 'p-5 bg-black text-center'
  const loaderSMCss = 'w-full md-hidden'
  const loaderMDCss = 'w-full md-shown'

  return (
    <div className={baseCss}>
      {isLoaded &&
        bids.map((data: Record<string, any>, idx: number) => (
          <Bid key={idx} data={data} />
        ))}
      {(isLoading || isError) && (
        <>
          <SvgLoaderMyBidsSM css={loaderSMCss} />
          <SvgLoaderMyBidsMD css={loaderMDCss} />
          {isError && <ErrorMessage message={data.error || data.code} />}
        </>
      )}
      {isLoaded && isEmpty && (
        <div className={emptyCss}>No ongoing bids at the moment.</div>
      )}
    </div>
  )
}

export default Bidding
