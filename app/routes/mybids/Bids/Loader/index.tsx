import clsx from 'clsx'

import Error from '@components/Error'
import MyBidsMDLoaderSvg from '@components/Svg/Loader/MyBidsMD'
import MyBidsSMLoaderSvg from '@components/Svg/Loader/MyBidsSM'

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
        <MyBidsMDLoaderSvg classes={mdLoaderCss} />
        <MyBidsSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
