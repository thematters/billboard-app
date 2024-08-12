import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import useQueryData from '@hook/useQueryData'
import SvgSpinner from '@svg/Spinner'

import Bid from './Bid'

const Bidding = () => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, submit } = useQueryData({
    action: '/api/bids/bidding',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const bids = data?.bids || []
  const isEmpty = bids.length === 0

  useEffect(() => {
    submit(
      { ...(isEstablished ? { address } : {}) },
      { method: 'GET', action: '/api/bids/bidding' }
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
      {bids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} data={data} />
      ))}
      {isEmpty && (
        <div className={emptyCss}>No ongoing bids at the moment.</div>
      )}
    </div>
  )
}

export default Bidding
