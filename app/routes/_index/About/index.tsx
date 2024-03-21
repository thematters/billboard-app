import clsx from 'clsx'

import ButtonLink from '@component/Button/Link'
import Crate from '@component/Crate'
import SvgDown from '@svg/Down'

import Sketch from './Sketch'

const About = () => {
  const innerCss = clsx('pb-10 lg:pb-40', 'relative')
  const baseCss = clsx('pt-2', 'max-limit')
  const downCss = clsx('mx-auto', 'text-green')
  const titleCss = clsx('mt-10', 'section-title')
  const btnCss = clsx('px-20', 'f-center', 'font-normal')

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder>
        {/* Sketch */}
        <Sketch />

        <section className={baseCss}>
          {/* Down Arrow */}
          <SvgDown css={downCss} />

          {/* Title */}
          <section className={titleCss}>
            ABOUT MATTERS <br className="md:hidden" />
            LAB
          </section>

          {/* Description */}
          <section className="mb-10">
            Matters Lab was established in 2018, with the mission to foster a
            freer and fairer creator ecosystem through the next evolution of the
            Internet, Web3.
          </section>

          <section className="f-center">
            <ButtonLink
              css={btnCss}
              color="dim"
              to="https://matters-lab.io/"
              target="_blank"
            >
              Visit Website
            </ButtonLink>
          </section>
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default About
