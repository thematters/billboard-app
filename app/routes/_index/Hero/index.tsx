import type { ComponentProps } from '@type'

import Crate from '@component/Crate'

import Decorator from './Decorator'
import Mission from './Mission'
import Slogan from './Slogan'

const Hero = () => {
  return (
    <Crate css="menu-spacing">
      <section className="hero">
        <Crate.Inner hasDots hasXBorder>
          <Slogan />
          <Decorator />
          <Mission />
        </Crate.Inner>
      </section>
    </Crate>
  )
}

export default Hero
