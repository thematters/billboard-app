import { useParams } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import Error from '@components/Error'
import BidMDLoaderSvg from '@components/Svg/Loader/BidMD'
import BidSMLoaderSvg from '@components/Svg/Loader/BidSM'
import useQuery from '@hooks/useQuery'

type PropsType = {
  setStep: (value: string) => void
}

const Verify = ({ setStep }: PropsType) => {
  const { id } = useParams()
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError, refetch } = useQuery({
    action: '/api/verify',
    params: { id, ...(isConnected ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    if (isConnected) {
      refetch({ id, ...(isConnected ? { address } : {}) })
    }
  }, [id, address, isConnected])

  useEffect(() => {
    if (!isLoaded || isError) {
      return
    }

    if (data?.whitelisted === true) {
      setStep('')
    } else {
      setStep('unauthed')
    }
  }, [data])

  const mdLoaderCss = clsx('loader-md')
  const smLoaderCss = clsx('loader-sm')

  return (
    <section>
      {(isLoading || isError) && (
        <>
          <BidMDLoaderSvg classes={mdLoaderCss} />
          <BidSMLoaderSvg classes={smLoaderCss} />
          {isError && (
            <Error message={data.error || data.code} align="center" />
          )}
        </>
      )}
    </section>
  )
}

export default Verify
