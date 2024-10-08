import { orderBy } from 'lodash-es'
import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import ErrorMessage from '@component/Error'
import useQueryData from '@hook/useQueryData'
import SvgLoaderMyBidsMD from '@svg/Loader/MyBidsMD'
import SvgLoaderMyBidsSM from '@svg/Loader/MyBidsSM'

import Bids from './Bids'

type Props = {
  setParentStep: (value: string) => void
}

const Outbid = ({ setParentStep }: Props) => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, refetch } = useQueryData({
    action: '/api/bids/refund',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const bids = orderBy(data?.bids || [], ['epoch'], ['desc'])
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
      {isLoaded && !isEmpty && !isError && (
        <Bids address={address} bids={bids} setParentStep={setParentStep} />
      )}
      {(isLoading || isError) && (
        <>
          <SvgLoaderMyBidsSM css={loaderSMCss} />
          <SvgLoaderMyBidsMD css={loaderMDCss} />
          {isError && <ErrorMessage message={data.error || data.code} />}
        </>
      )}
      {isLoaded && isEmpty && (
        <div className={emptyCss}>No bids refundable at the moment.</div>
      )}
    </div>
  )
}

export default Outbid
