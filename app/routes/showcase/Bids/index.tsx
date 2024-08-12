import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import useEnvs from '@hook/useEnvs'
import useQueryData from '@hook/useQueryData'
import SvgLoaderBidsMD from '@svg/Loader/BidsMD'
import SvgLoaderBidsSM from '@svg/Loader/BidsSM'

import Records from './Records'

const Bids = () => {
  const { tokenIdShowCase: id } = useEnvs()
  const { data, isLoading, isLoaded, isError } = useQueryData({
    action: '/api/bids',
    params: { id },
    auto: true,
  })

  const innerCss = 'py-8 lg:py-20'
  const loaderSMCss = 'w-full md-hidden'
  const loaderMDCss = 'w-full md-shown'

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasBottomBorder>
        <section className="max-limit">
          <h1 className="section-title">BIDS</h1>
          {(isLoading || isError) && (
            <>
              <SvgLoaderBidsSM css={loaderSMCss} />
              <SvgLoaderBidsMD css={loaderMDCss} />
              {isError && <ErrorMessage message={data.error || data.code} />}
            </>
          )}
          {isLoaded && <Records data={data || {}} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Bids
