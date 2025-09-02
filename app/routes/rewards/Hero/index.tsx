import { NavLink, useNavigate } from '@remix-run/react'
import clsx from 'clsx'
import { useAccount } from 'wagmi'

import Box from '@components/Box'
import GradButton from '@components/Button/Grad'
import useModal from '@hooks/useModal'

const Hero = () => {
  const navigate = useNavigate()
  const { open } = useModal()
  const { isConnected } = useAccount()

  const click = () => {
    if (isConnected) {
      navigate(`/claim`)
    } else {
      open('wallet')
    }
  }

  const baseCss = clsx(
    'reward-sketch f-colr px-4 md:px-5 lg:px-8 h-[650px] md:h-[794px] min-w-main'
  )
  const contentCss = clsx('f-colr gap-y-4 max-w-main mx-auto')
  const titleCss = clsx('section-title')
  const descCss = clsx(
    'text-base md:text-xl text-center text-gray-30 font-normal'
  )
  const linkCss = clsx('text-white')
  const buttonCss = clsx('py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('mt-6 mb-8 w-full md:w-fit mx-auto')

  return (
    <Box isFullWidth={true}>
      <section className={baseCss}>
        <div className={contentCss}>
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            onClick={click}
          >
            {isConnected && <>Claim Rewards</>}
            {!isConnected && <>Connect to Claim Rewards</>}
          </GradButton>
          <p className={descCss}>
            Billboard is dedicated to creative work powered by community
            rewards. Revenue from billboards is periodically distributed to
            creators through the community-governed process. If you’re claiming
            rewards for the first time, check our{' '}
            <NavLink
              className={linkCss}
              to="https://matters.town/a/bnrzg4x1iren"
              target="_blank"
            >
              step-by-step guide
            </NavLink>{' '}
            to get started.
          </p>
          <h1 className={titleCss}>
            Creative Works Powered by Community Support
          </h1>
        </div>
      </section>
    </Box>
  )
}

export default Hero
