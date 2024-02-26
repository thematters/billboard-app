import type { ComponentProps } from '~/types'

import clsx from 'clsx'

import Crate from '~/components/Crate'

import Decorator from './Decorator'
import Mission from './Mission'
import Slogan from './Slogan'

import png from '~/assets/hero.png'
import webp from '~/assets/hero.webp'

const Hero = () => {
  const crateCss = clsx('pt-[57px] lg:pt-[106px]')
  return (
    <Crate customCss={crateCss}>
      <Crate.Inner hasDots hasXBorder>
        <Slogan />
        <Decorator />
        <Mission />
      </Crate.Inner>
    </Crate>
  )
}

export default Hero
