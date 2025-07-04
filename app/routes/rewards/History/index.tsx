import clsx from 'clsx'

import Box from '@components/Box'
import useQuery from '@hooks/useQuery'

import Loader from './Loader'

import Rows from './Rows'

const History = () => {
  const { data, isLoading, isLoaded, isError } = useQuery({
    action: '/api/rewards/distribution',
    params: {},
    auto: true,
  })

  const baseCss = clsx('main-min-max mx-auto py-10 md:pt-[132px] md:pb-[100px]')

  return (
    <Box classes={baseCss}>
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {isLoaded && <Rows data={data || {}} />}
    </Box>
  )
}

export default History
