import type { ComponentProps } from '@type'

import Crate from '@component/Crate'

import Decorator from './Decorator'
import Mission from './Mission'
import Slogan from './Slogan'

const Hero = () => {
  return (
    <Crate css="menu-spacing">
      <div className="hero">
        <Crate.Inner hasDots hasXBorder>
          <Slogan />
          <Decorator />
          <Mission />
        </Crate.Inner>
      </div>
    </Crate>
  )
}

export default Hero
