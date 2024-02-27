import _ from 'lodash'
import clsx from 'clsx'
import { useEffect, useState, useRef } from 'react'

import Crate from '~/components/Crate'

import png from '~/assets/sketch.png'
import webp from '~/assets/sketch.webp'

const Sketch = () => {
  const imgCss = clsx(
    'h-[250px] lg:h-[470px]',
    'w-full',
    'h-min-[250px] h-max-[470px]',
    'sketch',
    'bg-cover bg-center bg-no-repeat'
  )

  return (
    <Crate hasXSpacing={false}>
      <Crate.Inner hasDots hasXSpacing={false}>
        <section className={imgCss} />
      </Crate.Inner>
    </Crate>
  )
}

export default Sketch
