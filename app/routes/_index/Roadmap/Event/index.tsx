import type { ComponentProps } from '~/types'

import clsx from 'clsx'

type EventProps = ComponentProps & {
  isThick?: boolean
  isChecked?: boolean
  hasChecker?: boolean
}

const Event = ({
  children,
  customCss,
  isThick,
  isChecked,
  hasChecker,
}: EventProps) => {
  const lineCss = clsx(
    "before:absolute before:bg-beige before:content-['']",
    // sm ~ md
    'before:left-[11px] before:top-0 before:h-full before:w-px',
    // lg
    'lg:before:left-0',
    'lg:before:w-[calc(100%+40px)]',
    {
      'lg:before:top-0 lg:before:h-px': !isThick,
      'lg:before:-top-px lg:before:h-[3px]': isThick,
    }
  )

  const circleCss = clsx(
    "after:absolute after:content-['']",
    'after:h-6 after:w-6',
    'after:bg-auto after:bg-center after:bg-no-repeat',
    'after:rounded-full after:border-2',
    'after:left-0',
    // sm ~ md
    'after:top-2',
    // lg
    'lg:after:-top-3',
    {
      'after:hidden': !hasChecker,
      'after:check after:bg-beige': isChecked,
      'after:bg-black': !isChecked,
    }
  )

  const css = clsx(
    'pb-2 pl-12 pt-2',
    'lg:pb-0 lg:pl-0 lg:pt-9',
    'relative',
    lineCss,
    circleCss,
    customCss
  )

  const contentCss = clsx('t-16', 'font-semibold')

  return (
    <section className={css}>
      <p className={contentCss}>{children}</p>
    </section>
  )
}

export default Event
