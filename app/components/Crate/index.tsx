import type React from 'react'

import clsx from 'clsx'

type BaseProps = {
  children?: React.ReactNode
  customCss?: string
}

type CrateProps = BaseProps & {
  hasTopBorder?: boolean
  hasBottomBorder?: boolean
}

const Crate = ({
  children,
  customCss,
  hasTopBorder,
  hasBottomBorder,
}: CrateProps) => {
  const css = clsx(
    'px-4 lg:px-8',
    hasTopBorder && 'b-t-grass',
    hasBottomBorder && 'b-b-grass',
    customCss
  )
  return <section className={css}>{children}</section>
}

type CrateInnerProps = BaseProps & {
  hasXBorder?: boolean
}

const Inner = ({ children, customCss, hasXBorder }: CrateInnerProps) => {
  const css = clsx('px-4 lg:px-12', hasXBorder && 'b-x-grass', customCss)
  return <section className={css}>{children}</section>
}

Crate.Inner = Inner

export default Crate
