import clsx from 'clsx'

import Error from '@components/Error'
import DistMDLoaderSvg from '@components/Svg/Loader/DistMD'
import DistSMLoaderSvg from '@components/Svg/Loader/DistSM'

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
        <DistMDLoaderSvg classes={mdLoaderCss} />
        <DistSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
