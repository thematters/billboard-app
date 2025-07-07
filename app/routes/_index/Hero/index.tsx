import clsx from 'clsx'

import Box from '@components/Box'
import GradButton from '@components/Button/Grad'

import Marquee from './Marquee'

const Hero = () => {
  const baseCss = clsx('home-sketch f-colr h-[800px] md:h-[980px]')
  const contentCss = clsx(
    'f-colr gap-y-4 px-4 md:px-5 lg:px-8 max-w-main min-w-main mx-auto'
  )
  const titleCss = clsx(
    'text-4xl md:text-7xl text-white text-center font-semibold'
  )
  const breakerCss = clsx('block md:hidden')
  const descCss = clsx(
    'text-base md:text-xl text-center text-gray-30 font-normal'
  )
  const buttonsCss = clsx(
    'mt-10 mb-6 md:mb-28 f-col gap-y-4 md:f-row-cc md:gap-x-10'
  )
  const buttonCss = clsx('py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-fit')
  const marqueeCss = clsx('mt-6 mb-10 md:my-16')

  return (
    <Box isFullWidth={true}>
      <section className={baseCss}>
        <Marquee classes={marqueeCss} />
        <div className={contentCss}>
          <div className={buttonsCss}>
            <GradButton
              classes={buttonCss}
              outerClasses={buttonOuterCss}
              color="green"
              type="link"
              target="_self"
            >
              Bid AD Board
            </GradButton>
            <GradButton
              classes={buttonCss}
              outerClasses={buttonOuterCss}
              color="dim-green"
              type="link"
              target="_self"
            >
              List Your Idle AD Spaces
            </GradButton>
          </div>
          <p className={descCss}>
            Billboard is a protocol redefines advertising efficiency and
            transparency, supporting creators with fair profit-sharing.
          </p>
          <h1 className={titleCss}>
            Amplify your reach,
            <br className={breakerCss} /> benefit all
          </h1>
        </div>
      </section>
    </Box>
  )
}

export default Hero
