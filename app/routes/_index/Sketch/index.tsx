import _ from 'lodash'
import { useEffect, useState, useRef } from 'react'

import Crate from '~/components/Crate'

import png from '~/assets/sketch.png'
import webp from '~/assets/sketch.webp'

const Sketch = () => {
  const [height, setHeight] = useState(0)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const handler = _.debounce(() => {
      setHeight((imgRef?.current?.offsetHeight || 0) + 1)
    }, 100)

    handler()

    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <Crate
      color="dim"
      outerClass="relative"
      innerClass="!px-0"
      innerStyles={{ height }}
      hasDots
    >
      <picture>
        <source type="image/webp" srcSet={webp} />
        <img
          ref={imgRef}
          className="absolute w-screen top-0 left-0"
          src={png}
        />
      </picture>
    </Crate>
  )
}

export default Sketch
