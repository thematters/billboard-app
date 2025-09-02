import clsx from 'clsx'

import Error from '@components/Error'
import BidMDLoaderSvg from '@components/Svg/Loader/BidMD'
import BidSMLoaderSvg from '@components/Svg/Loader/BidSM'

type PropsType = {
  data: Record<string, Anything>
  isLoading: boolean
  isError: boolean
}

const Loader = ({ data, isLoading, isError }: PropsType) => {
  const mdLoaderCss = clsx('loader-md')
  const smLoaderCss = clsx('loader-sm')

  if (isLoading || isError) {
    return (
      <>
        <BidMDLoaderSvg classes={mdLoaderCss} />
        <BidSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
