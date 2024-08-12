import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import useQueryData from '@hook/useQueryData'
import SvgSpinner from '@svg/Spinner'

import Bids from './Bids'

type Props = {
  setParentStep: (value: string) => void
}

const Refund = ({ setParentStep }: Props) => {
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, submit } = useQueryData({
    action: '/api/bids/refund',
    params: { ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  const bids = data?.bids || []
  const isEmpty = bids.length === 0

  useEffect(() => {
    submit(
      { ...(isEstablished ? { address } : {}) },
      { method: 'GET', action: '/api/bids/refund' }
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
      {isEmpty ? (
        <div className={emptyCss}>No bids refund at the moment.</div>
      ) : (
        <Bids address={address} bids={bids} setParentStep={setParentStep} />
      )}
    </div>
  )
}

export default Refund
