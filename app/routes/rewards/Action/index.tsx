import clsx from 'clsx'

import Box from '@components/Box'
import GradButton from '@components/Button/Grad'

const Action = () => {
  const baseCss = clsx(
    'action-sketch f-colr px-4 md:px-5 lg:px-8 h-[560px] md:h-[672px] min-w-main'
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
            type="link"
            to="https://matters-lab.io/"
          >
            List Your AD Spaces Now
          </GradButton>
          <p className={descCss}>Don’t hesitate to get in touch.</p>
          <h1 className={titleCss}>Support your community—onboard now</h1>
        </div>
      </section>
    </Box>
  )
}

export default Action
