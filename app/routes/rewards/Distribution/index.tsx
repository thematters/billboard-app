import clsx from 'clsx'

import Box from '@components/Box'
import useQuery from '@hooks/useQuery'

import Loader from './Loader'

import Rows from './Rows'

const Distribution = () => {
  const { data, isLoading, isLoaded, isError } = useQuery({
    action: '/api/rewards/distribution',
    params: {},
    auto: true,
  })

  const baseCss = clsx('main-min-max mx-auto py-10 md:py-[100px]')

  return (
    <Box classes={baseCss}>
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {isLoaded && <Rows data={data || {}} />}
    </Box>
  )
}

export default Distribution
