import type { ComponentProps } from '@type'

import clsx from 'clsx'
import _ from 'lodash'

import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

type Props = ComponentProps & {
  size: number
}

const Carousel = ({ children, css, size }: ComponentProps) => {
  const [curr, setCurr] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scroll = (index: number) => {
    if (index === curr || !emblaApi) {
      return
    }
    emblaApi.scrollTo(index)
  }

  useEffect(() => {
    if (!emblaApi) {
      return
    }
    emblaApi.on('select', () => {
      setCurr(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const dotsCss = clsx('mt-6', 'f-center')
  const dotCss = clsx(
    'mx-4',
    'h-3 w-3',
    'bg-beige/60',
    'rounded-full',
    'cursor-pointer'
  )
  const activeCss = clsx('h-4 w-4', 'bg-grass', 'cursor-default')

  return (
    <section>
      <section className="embla" ref={emblaRef}>
        <section className="embla__container">{children}</section>
      </section>
      <section className={dotsCss}>
        {_.range(size).map((i) => (
          <section
            key={i}
            className={clsx(dotCss, curr == i && activeCss)}
            onClick={() => scroll(i)}
          />
        ))}
      </section>
    </section>
  )
}

export default Carousel
