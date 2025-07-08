import clsx from 'clsx'

import Box from '@components/Box'

import Roles from './Roles'

const Work = () => {
  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')
  const titleCss = clsx('section-title')

  return (
    <Box classes={baseCss}>
      <h1 className={titleCss}>How it works</h1>
      <Roles />
    </Box>
  )
}

export default Work
