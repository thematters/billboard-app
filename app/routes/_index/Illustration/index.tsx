import _ from 'lodash'
import { useEffect, useState, useRef } from 'react'

import Crate from '~/components/Crate'

import illustration from '../../../assets/illustration-bg.png'

const Illustration = () => {
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
      <img
        ref={imgRef}
        className="absolute w-screen top-0 left-0"
        src={illustration}
      />
    </Crate>
  )
}

export default Illustration
