import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import useEnvs from '@hook/useEnvs'
import useQueryData from '@hook/useQueryData'
import SvgLoaderAuctionsMD from '@svg/Loader/AuctionsMD'
import SvgLoaderAuctionsSM from '@svg/Loader/AuctionsSM'

import Records from './Records'

const Auctions = () => {
  const { tokenIdShowCase: id } = useEnvs()
  const { data, isLoading, isLoaded, isError } = useQueryData({
    action: '/api/auctions',
    params: { id },
    auto: true,
  })

  const innerCss = 'py-8 lg:py-20'
  const skeletonSMCss = 'w-full md-hidden'
  const skeletonMDCss = 'w-full md-shown'

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasBottomBorder>
        <section className="max-limit">
          <h1 className="section-title">AUCTION HISTORY</h1>
          {(isLoading || isError) && (
            <>
              <SvgLoaderAuctionsSM css={skeletonSMCss} />
              <SvgLoaderAuctionsMD css={skeletonMDCss} />
              {isError && <ErrorMessage message={data.error || data.code} />}
            </>
          )}
          {isLoaded && <Records data={data || {}} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Auctions
