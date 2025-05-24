import clsx from 'clsx'

import Box from '@components/Box'

import Auctions from './Auctions'
import Summary from './Summary'

const Page = () => {
  const baseCss = clsx('max-w-main mx-auto')
  return (
    <Box classes={baseCss}>
      <Summary />
      <Auctions />
    </Box>
  )
}

export default Page
