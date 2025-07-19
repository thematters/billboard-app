import clsx from 'clsx'

import Box from '@components/Box'
import MailSvg from '@components/Svg/Mail'
import PaperSvg from '@components/Svg/Paper'
import { MAIL, PAPER_LINK } from '@constants'

import Contact from './Contact'
import Item from './Item'

const Footer = () => {
  const baseCss = clsx('mt-auto mx-auto max-w-footer min-w-footer py-16')
  const footerCss = clsx('grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-20')
  const dividerCss = clsx('my-6 w-full h-px bg-gray-80 col-span-3 lg:hidden')

  return (
    <footer>
      <Box classes={baseCss}>
        <section className={footerCss}>
          <Item
            to={MAIL}
            title="Contact Us"
            content="Email us to own your Billboards"
          >
            <MailSvg />
          </Item>
          <Item
            to={PAPER_LINK}
            title="Green Paper"
            content="Find more details about our goal"
            inMiddle={true}
          >
            <PaperSvg />
          </Item>
          <div className={dividerCss} />
          <Contact />
        </section>
      </Box>
    </footer>
  )
}

export default Footer
