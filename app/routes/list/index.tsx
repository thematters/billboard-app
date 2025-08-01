import clsx from 'clsx'

import Box from '@components/Box'
import GradButton from '@components/Button/Grad'
import { MAIL } from '@constants'

const Page = () => {
  const onClick = (event: MouseEvent) => {
    event.preventDefault()
    window.open(MAIL, '_self')
  }

  const baseCss = clsx(
    'list-sketch f-colr px-4 md:px-5 lg:px-8 h-[800px] min-w-main'
  )
  const contentCss = clsx('f-colr gap-y-4 max-w-main mx-auto')
  const titleCss = clsx('section-title')
  const descCss = clsx(
    'text-base md:text-xl text-center text-gray-30 font-normal'
  )
  const buttonCss = clsx('f-row-cc gap-x-1 py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('mt-6 mb-8 md:mb-16 w-full md:w-fit mx-auto')

  return (
    <Box isFullWidth={true}>
      <section className={baseCss}>
        <div className={contentCss}>
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            onClick={onClick}
          >
            Contact Us
          </GradButton>
          <p className={descCss}>
            Taking it a step further, this protocol can be seamlessly integrated
            into all kinds of apps—from blogs and forums to social
            platforms—enabling direct, transparent monetization while routing a
            larger share of the revenue to creators and their communities.
          </p>
          <p className={descCss}>
            Billboard is a decentralized protocol lets you turn your website’s
            ad spaces into NFTs and place them in a continuous Harberger-tax
            auction, giving your platform a predictable on-chain revenue stream
            without relying on data-harvesting ad networks.
          </p>
          <h1 className={titleCss}>
            Build a sustainable profit-sharing ecosystem for your platform and
            community
          </h1>
        </div>
      </section>
    </Box>
  )
}

export default Page
