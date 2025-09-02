import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import range from 'lodash-es/range'
import { useEffect, useState } from 'react'

import MonoButton from '@components/Button/Mono'
import ChevronLeftSvg from '@components/Svg/ChevronLeft'
import ChevronRightSvg from '@components/Svg/ChevronRight'

type PropsType = ComponentPropsType & {
  size: number
}

const BaseCarousel = ({ children, classes, size }: PropsType) => {
  const [curr, setCurr] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const prev = () => {
    if (!emblaApi || !emblaApi.canScrollPrev()) {
      return
    }
    emblaApi.scrollPrev()
  }

  const next = () => {
    if (!emblaApi || !emblaApi.canScrollNext()) {
      return
    }
    emblaApi.scrollNext()
  }

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
  const carouselOuterCss = clsx('relative')
  const buttonCss = clsx('!size-9 hidden md:f-row-cc')
  const prevCss = clsx('absolute -left-5 top-1/2 -translate-y-1/2', buttonCss)
  const nextCss = clsx('absolute -right-5 top-1/2 -translate-y-1/2', buttonCss)
  const dotsCss = clsx('f-row-cc gap-x-6 mt-10 mx-auto')
  const dotCss = clsx('size-3 bg-gray-70 rounded-full cursor-pointer')
  const dotActiveCss = clsx('size-3 !bg-green-10 !cursor-default')

  return (
    <section className={baseCss}>
      <div className={carouselOuterCss}>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{children}</div>
        </div>
        <MonoButton
          classes={prevCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!emblaApi?.canScrollPrev()}
          onClick={prev}
        >
          <ChevronLeftSvg width={16} height={16} />
        </MonoButton>
        <MonoButton
          classes={nextCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!emblaApi?.canScrollNext()}
          onClick={next}
        >
          <ChevronRightSvg width={16} height={16} />
        </MonoButton>
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

export default BaseCarousel
