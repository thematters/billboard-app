import type { ComponentProps } from '@type'

import clsx from 'clsx'

type SlideContentProps = ComponentProps & {
  title: string
  isActive: boolean
}

const SlideContent = ({
  children,
  css,
  title,
  isActive,
}: SlideContentProps) => {
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

export default SlideContent
