import LinkButton from '@component/Button/Link'
import Crate from '@component/Crate'
import SvgDown from '@svg/Down'

import Sketch from './Sketch'

const About = () => {
  const innerCss = 'pb-10 lg:pb-40 relative'
  const baseCss = 'pt-2 max-limit'
  const downCss = 'mx-auto text-green'
  const titleCss = 'mt-10 section-title'
  const btnCss = 'px-20 t-18 f-center font-normal'

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder>
        <Sketch />

        <section className={baseCss}>
          {/* Down Arrow */}
          <SvgDown css={downCss} />

          {/* Title */}
          <div className={titleCss}>
            ABOUT MATTERS <br className="md:hidden" />
            LAB
          </div>

          {/* Description */}
          <div className="mb-10">
            Matters Lab was established in 2018, with the mission to foster a
            freer and fairer creator ecosystem through the next evolution of the
            Internet, Web3.
          </div>

          <div className="f-center">
            <LinkButton
              css={btnCss}
              color="dim"
              to="https://matters-lab.io/"
              target="_blank"
            >
              Visit Website
            </LinkButton>
          </div>
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default About
