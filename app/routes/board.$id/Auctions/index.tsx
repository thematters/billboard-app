import { useParams } from '@remix-run/react'
import clsx from 'clsx'

import Error from '@components/Error'
import AuctionsMDLoaderSvg from '@components/Svg/Loader/AuctionsMD'
import AuctionsSMLoaderSvg from '@components/Svg/Loader/AuctionsSM'
import useQuery from '@hooks/useQuery'

import Rows from './Rows'

const Auctions = () => {
  const { id } = useParams()
  const { data, isLoading, isLoaded, isError } = useQuery({
    action: '/api/auctions',
    params: { id },
  })

  const baseCss = clsx('pt-20 md:pt-36')
  const titleCss = clsx('section-title text-center')
  const mdLoaderCss = clsx('loader-md')
  const smLoaderCss = clsx('loader-sm')

  return (
    <section className={baseCss}>
      {(isLoading || isError) && (
        <>
          <AuctionsMDLoaderSvg classes={mdLoaderCss} />
          <AuctionsSMLoaderSvg classes={smLoaderCss} />
          {isError && (
            <Error message={data.error || data.code} align="center" />
          )}
        </>
      )}
      {isLoaded && (
        <>
          <h1 className={titleCss}>Auction History</h1>
          <Rows data={data || {}} />
        </>
      )}
    </section>
  )
}

export default Auctions
