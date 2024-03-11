import type { ComponentProps } from '@types'

import clsx from 'clsx'

import SvgArrow from '@svgs/Arrow'

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

type ContentProps = ComponentProps & {
  title: string
  isActive: boolean
}

const Content = ({ children, css, title, isActive }: ContentProps) => {
  const baseCss = clsx('overflow-x-hidden', 'trans-300', {
    'h-full opacity-100': isActive,
    'h-0 opacity-0': !isActive,
  })

  const titleCss = clsx('t-20 lg:t-28', 'text-grass', 'font-bold')

  const contentCss = clsx('t-14 lg:t-18', 'mt-1 lg:mt-6')

  return (
    <section className={baseCss}>
      <h4 className={titleCss}>{title}</h4>
      <section className={contentCss}>{children}</section>
    </section>
  )
}

Slide.Content = Content

export default Slide
