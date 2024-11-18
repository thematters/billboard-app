import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import useQueryData from '@hook/useQueryData'
import SvgLoaderFundsMD from '@svg/Loader/FundsMD'
import SvgLoaderFundsSM from '@svg/Loader/FundsSM'

import Records from './Records'

const Funds = () => {
  const { data, isLoading, isLoaded, isError } = useQueryData({
    action: '/api/funds',
    params: {},
    auto: true,
  })

  const innerCss = 'py-8 lg:py-20'

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasBottomBorder>
        <section className="max-limit">
          <h1 className="section-title">
            CREATOR REWARDS
            <br />
            DISTRIBUTION HISTORY
          </h1>
          {(isLoading || isError) && (
            <>
              <SvgLoaderFundsSM css="skeleton-sm" />
              <SvgLoaderFundsMD css="skeleton-md" />
              {isError && <ErrorMessage message={data.error || data.code} />}
            </>
          )}
          {isLoaded && <Records data={data || {}} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Funds
