import type { ComponentProps } from '@type'

import clsx from 'clsx'

import SvgArrow from '@svg/Arrow'

import SlideContent from './Content'

type SlideProps = ComponentProps & {
  current: string | null
  items: Array<string>
  click: (value: string | null) => void
}

const Slide = ({ children, css, current, items, click }: SlideProps) => {
  const index = current === null ? -1 : items.indexOf(current)
  const prev = index === 0 || index < 0 ? null : items[index - 1]
  const next = index === items.length - 1 || index < 0 ? null : items[index + 1]

  const baseCss = clsx(
    'p-6',
    'h-fit',
    'f-col-between',
    'bg-black',
    'border border-green',
    'rounded-3xl',
    css
  )
  const btnsCss = clsx(
    'h-[40px] lg:h-[80px]',
    'mt-4 lg:mt-8',
    'flex flex-row-reverse items-center'
  )
  const arrowCss = clsx('h-[15px] w-[23px] lg:h-[30px] lg:w-[45px]')
  const arrowRightCss = clsx(arrowCss, 'text-grass', {
    'cursor-default opacity-20': !next,
    'cursor-pointer opacity-100': next,
  })
  const arrowLeftCss = clsx(arrowCss, 'scale-x-[-1]', 'text-grass', {
    'cursor-default opacity-20': !prev,
    'cursor-pointer opacity-100': prev,
  })

  return (
    <section className={baseCss}>
      {/* Content */}
      <section>{children}</section>

      {/* Buttons */}
      <section className={btnsCss}>
        <section onClick={() => click(next)}>
          <SvgArrow css={arrowRightCss} />
        </section>
        <section className="mr-6" onClick={() => click(prev)}>
          <SvgArrow css={arrowLeftCss} />
        </section>
      </section>
    </section>
  )
}

Slide.Content = SlideContent

export default Slide
