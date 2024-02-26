import type { ComponentProps } from '~/types'

import clsx from 'clsx'

type CrateProps = ComponentProps & {
  hasXSpacing?: boolean
  hasTopBorder?: boolean
  hasBottomBorder?: boolean
}

const Crate = ({
  children,
  customCss,
  hasXSpacing = true,
  hasTopBorder,
  hasBottomBorder,
}: CrateProps) => {
  const css = clsx(
    {
      'px-4 lg:px-8': hasXSpacing,
      'b-t-green': hasTopBorder,
      'b-b-green': hasBottomBorder,
    },
    customCss
  )
  return <section className={css}>{children}</section>
}

type InnerProps = ComponentProps & {
  hasDots?: boolean
  hasXBorder?: boolean
  hasXSpacing?: boolean
  hasYBorder?: boolean
  hasTopBorder?: boolean
}

const Inner = ({
  children,
  customCss,
  hasDots,
  hasXBorder,
  hasXSpacing = true,
  hasYBorder,
  hasTopBorder,
}: InnerProps) => {
  const css = clsx(
    {
      'px-4 lg:px-12': hasXSpacing,
      'b-x-green': hasXBorder,
      'b-y-green': hasYBorder,
      'b-t-green': hasTopBorder,
      dots: hasDots,
    },
    customCss
  )
  return <section className={css}>{children}</section>
}

Crate.Inner = Inner

export default Crate
