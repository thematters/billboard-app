import clsx from 'clsx'

import Box from '@components/Box'
import GradButton from '@components/Button/Grad'
import useAppEnv from '@hooks/useAppEnv'

const Action = () => {
  const { tokenIdShowCase: id } = useAppEnv()

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
            to={`/board/${id}`}
            target="_self"
          >
            Bid Advertising Board
          </GradButton>
          <p className={descCss}></p>
          <h1 className={titleCss}>More Exposure ? Bid Now</h1>
        </div>
      </section>
    </Box>
  )
}

export default Action
