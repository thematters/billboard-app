import type { ComponentProps } from '@types'

import clsx from 'clsx'

type CrateProps = ComponentProps & {
  hasXSpacing?: boolean
  hasTopBorder?: boolean
  hasBottomBorder?: boolean
}

const Crate = ({
  children,
  css,
  hasXSpacing = true,
  hasTopBorder,
  hasBottomBorder,
}: CrateProps) => {
  const baseCss = clsx(
    {
      'px-4 lg:px-8': hasXSpacing,
      'b-t-green': hasTopBorder,
      'b-b-green': hasBottomBorder,
    },
    css
  )
  return <section className={baseCss}>{children}</section>
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
  css,
  hasDots,
  hasXBorder,
  hasXSpacing = true,
  hasYBorder,
  hasTopBorder,
}: InnerProps) => {
  const baseCss = clsx(
    {
      'px-4 lg:px-12': hasXSpacing,
      'b-x-green': hasXBorder,
      'b-y-green': hasYBorder,
      'b-t-green': hasTopBorder,
      dots: hasDots,
    },
    css
  )
  return <section className={baseCss}>{children}</section>
}

Crate.Inner = Inner

export default Crate
