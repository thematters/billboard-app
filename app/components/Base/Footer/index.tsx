import clsx from 'clsx'

import Box from '@components/Box'

const Footer = () => {
  const boxCss = clsx('mx-auto max-w-footer')
  return (
    <footer>
      <Box classes={boxCss}> </Box>
    </footer>
  )
}

export default Footer
