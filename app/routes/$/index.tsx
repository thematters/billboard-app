import clsx from 'clsx'

import Box from '@components/Box'

const Page = () => {
  const baseCss = clsx('main-min-max mx-auto py-10 md:py-20')
  const titleCss = clsx('pt-8 section-title pb-4')
  const textCss = clsx('text-center')

  return (
    <Box classes={baseCss}>
      <h1 className={titleCss}>404</h1>
      <p className={textCss}>page not found</p>
    </Box>
  )
}

export default Page
