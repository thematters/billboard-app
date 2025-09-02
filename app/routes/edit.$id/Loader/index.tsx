import clsx from 'clsx'

import Error from '@components/Error'
import EditMDLoaderSvg from '@components/Svg/Loader/EditMD'
import EditSMLoaderSvg from '@components/Svg/Loader/EditSM'

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
        <EditMDLoaderSvg classes={mdLoaderCss} />
        <EditSMLoaderSvg classes={smLoaderCss} />
        {isError && <Error message={data.error || data.code} align="center" />}
      </>
    )
  }

  return null
}

export default Loader
