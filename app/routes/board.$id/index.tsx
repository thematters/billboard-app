import clsx from 'clsx'

import Box from '@components/Box'

import Auctions from './Auctions'
import Summary from './Summary'

const Page = () => {
  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')
  return (
    <Box classes={baseCss}>
      <Summary />
      <Auctions />
    </Box>
  )
}

export default Page
