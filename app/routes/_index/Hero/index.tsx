import _ from 'lodash'
import { useEffect, useState } from 'react'

import { BREAKPOINTS } from '~/common'
import Crate from '~/components/Crate'
import LinkButton from '~/components/Buttons/LinkButton'
import ImgBoardCardOne from '~/components/Images/BoardCardOne'
import ImgBoardCardTwo from '~/components/Images/BoardCardTwo'

const Hero = () => {
  const [isAnimated, setAnimated] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 1100)
    return () => clearTimeout(timer)
  }, [])

  const middle = 'hero bg-center bg-no-repeat bg-cover'
  const inner = 'px-4 pt-20 pb-32 lg:px-12 lg:pt-44 lg:pb-36 lg:pb-52 xl:pb-80'

  const cardBasis = [
    'w-[200px] h-[160px] md:w-[231px] md:h-[185px] lg:w-[376px] lg:h-[300px] z-1',
    'transition-all ease-in-out transform duration-1000',
  ].join(' ')

  const cardOne = [
    cardBasis,
    '-translate-x-1/4 translate-y-4',
    'lg:-translate-x-1/2 lg:translate-y-4 xl:translate-y-20',
    isAnimated ? 'rotate-12' : '',
  ].join(' ')

  const cardTwo = [
    cardBasis,
    'translate-x-1/4 translate-y-4',
    'lg:translate-x-0 lg:translate-y-12 xl:translate-y-28',
    isAnimated ? '-rotate-12' : '',
  ].join(' ')

  return (
    <Crate color="dim" middleClass={middle} innerClass={inner} hasDots>
      {/* Slogan */}
      <section>
        <h1 className="font-cyber text-light-green text-24 md:text-36 lg:text-76">
          A NEW GENERATION OF BILLBOARDS IN THE DECENTRALIZED World
        </h1>
      </section>

      {/* Hero content */}
      <section className="mt-14 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
        {/* Description*/}
        <section className="lg:pl-24 xl:pr-10 grid grid-cols-1">
          <section className="text-14 md:text-20">
            A decentralized social network can now have a market of providers
            providing services from content discovery to inbox hosting.
          </section>
          <section className="mt-12 lg:mt-0 flex-center lg:flex-start">
            <LinkButton to="/showcase" otherClass="w-[272px]">
              Showcase
            </LinkButton>
          </section>
        </section>

        {/* Board cards */}
        <section className="relative mt-10 lg:mt-0 flex-center">
          <ImgBoardCardTwo className={cardTwo} />
          <ImgBoardCardOne className={cardOne} />
        </section>
      </section>
    </Crate>
  )
}

export default Hero
