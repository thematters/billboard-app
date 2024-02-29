import clsx from 'clsx'

import LinkButton from '~/components/Buttons/Link'
import Crate from '~/components/Crate'
import SvgDown from '~/components/Svgs/Down'

import Sketch from './Sketch'

const About = () => {
  const innerCss = clsx('pb-10 lg:pb-40', 'relative')

  const css = clsx('pt-2', 'max-limit')

  const downCss = clsx('mx-auto', 'text-green')

  const titleCss = clsx('mt-10', 'section-title')

  const btnCss = clsx('px-20', 'mx-auto', 'f-center', 'font-normal')

  return (
    <Crate>
      <Crate.Inner customCss={innerCss} hasDots hasXBorder>
        {/* Sketch */}
        <Sketch />

        <section className={css}>
          {/* Down Arrow */}
          <SvgDown customCss={downCss} />

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

          <LinkButton
            customCss={btnCss}
            color="dim"
            to="https://matters-lab.io/"
          >
            Visit Website
          </LinkButton>
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default About
