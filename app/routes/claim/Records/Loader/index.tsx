import clsx from 'clsx'

import Error from '@components/Error'
import ClaimMDLoaderSvg from '@components/Svg/Loader/ClaimMD'
import ClaimSMLoaderSvg from '@components/Svg/Loader/ClaimSM'

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
        <ClaimMDLoaderSvg classes={mdLoaderCss} />
        <ClaimSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
