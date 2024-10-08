import { useFetcher } from '@remix-run/react'
import { useEffect, useState } from 'react'

import useQueryData from '@hook/useQueryData'
import LoaderBidMD from '@svg/Loader/BidMD'
import LoaderBidSM from '@svg/Loader/BidSM'

import Form from './Form'

type Props = {
  id: string
  epoch: string
  address?: `0x${string}`
  setParentStep: (value: string) => void
}

const Act = ({ id, epoch, address, setParentStep }: Props) => {
  const { data, isLoading, isLoaded, isError, refetch } = useQueryData({
    action: '/api/bid',
    params: { id, ...(address ? { address } : {}), epoch },
    auto: true,
  })

  const hasBid = Number(data?.bid?.placedAt || 0) > 0

  useEffect(() => {
    refetch({ id, ...(address ? { address } : {}), epoch })
  }, [id, address, epoch])

  const baseCss = 'lg:pb-20 max-limit'
  const loaderSMCss = 'mx-auto md-hidden'
  const loaderMDCss = 'mx-auto md-shown'

  return (
    <section className={baseCss}>
      <h1 className="section-title">{hasBid ? 'UPDATE BID' : 'PLACE BID'}</h1>
      {isLoading && (
        <>
          <LoaderBidSM css={loaderSMCss} />
          <LoaderBidMD css={loaderMDCss} />
        </>
      )}
      {isLoaded && (
        <Form
          data={data}
          id={id}
          epoch={epoch}
          address={address}
          setParentStep={setParentStep}
        />
      )}
    </section>
  )
}

export default Act
