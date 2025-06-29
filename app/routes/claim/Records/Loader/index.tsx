import clsx from 'clsx'

import Error from '@components/Error'
import RewardMDLoaderSvg from '@components/Svg/Loader/RewardMD'
import RewardSMLoaderSvg from '@components/Svg/Loader/RewardSM'

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
        <RewardMDLoaderSvg classes={mdLoaderCss} />
        <RewardSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
