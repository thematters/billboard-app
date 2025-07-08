import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { useEffect, useState } from 'react'

import MonoButton from '@components/Button/Mono'
import ChevronLeftSvg from '@components/Svg/ChevronLeft'
import ChevronRightSvg from '@components/Svg/ChevronRight'

type PropsType = ComponentsPropsType & {
  // TODO
}

const SideCarousel = ({ children, classes }: PropsType) => {
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

  useEffect(() => {
    if (!emblaApi) {
      return
    }
    emblaApi.on('select', () => {
      setCurr(emblaApi.selectedScrollSnap())
    })
  }, [emblaApi])

  const baseCss = clsx('w-full', classes)
  const buttonsCss = clsx('mt-8 md:mt-10 f-row-cc md:f-row-cs gap-x-9')
  const buttonCss = clsx(
    '!size-8 f-row-cc !bg-transparent border border-gray-80 text-green-10'
  )

  return (
    <section className={baseCss}>
      <div>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">{children}</div>
        </div>
      </div>
      <div className={buttonsCss}>
        <MonoButton
          classes={buttonCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!emblaApi?.canScrollPrev()}
          onClick={prev}
        >
          <ChevronLeftSvg width={16} height={16} opacity={1} />
        </MonoButton>
        <MonoButton
          classes={buttonCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!emblaApi?.canScrollNext()}
          onClick={next}
        >
          <ChevronRightSvg width={16} height={16} opacity={1} />
        </MonoButton>
      </div>
    </section>
  )
}

export default SideCarousel
