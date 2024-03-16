import type { ComponentProps } from '@type'

import clsx from 'clsx'

import CrateInner from './Inner'

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

Crate.Inner = CrateInner

export default Crate
