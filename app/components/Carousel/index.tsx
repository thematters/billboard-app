import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import range from 'lodash-es/range'
import { useEffect, useState } from 'react'

type PropsType = ComponentPropsType & {
  size: number
}

const Carousel = ({ children, classes, size }: PropsType) => {
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

  const baseCss = clsx('w-full', classes)
  const dotsCss = clsx('f-row-cc gap-x-6 mt-10 mx-auto')
  const dotCss = clsx('size-3 bg-gray-70 rounded-full cursor-pointer')
  const dotActiveCss = clsx('size-3 !bg-green-10 !cursor-default')

  return (
    <section className={baseCss}>
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className={dotsCss}>
        {range(size).map((i) => (
          <div
            key={i}
            className={clsx(dotCss, curr === i && dotActiveCss)}
            onClick={() => scroll(i)}
          />
        ))}
      </div>
    </section>
  )
}

export default Carousel
