import { useParams } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import Error from '@components/Error'
import BoardMDLoaderSvg from '@components/Svg/Loader/BoardMD'
import BoardSMLoaderSvg from '@components/Svg/Loader/BoardSM'
import useQuery from '@hooks/useQuery'

import Image from './Image'
import Meta from './Meta'

const Summary = () => {
  const { id } = useParams()
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError, refetch } = useQuery({
    action: '/api/board',
    params: { id, ...(isConnected ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    refetch({ id, ...(isConnected ? { address } : {}) })
  }, [id, address, isConnected])

  const mdLoaderCss = clsx('loader-md')
  const smLoaderCss = clsx('loader-sm')
  const boardCss = clsx('grid grid-cols-1 md:grid-cols-2 gap-x-0')

  return (
    <section>
      {(isLoading || isError) && (
        <>
          <BoardMDLoaderSvg classes={mdLoaderCss} />
          <BoardSMLoaderSvg classes={smLoaderCss} />
          {isError && (
            <Error message={data.error || data.code} align="center" />
          )}
        </>
      )}
      {isLoaded && (
        <section className={boardCss}>
          <Image board={data.board} />
          <Meta data={data} />
        </section>
      )}
    </section>
  )
}

export default Summary
