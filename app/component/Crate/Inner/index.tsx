import type { ComponentProps } from '@type'

import clsx from 'clsx'

type CrateInnerProps = ComponentProps & {
  hasDots?: boolean
  hasXBorder?: boolean
  hasXSpacing?: boolean
  hasYBorder?: boolean
  hasTopBorder?: boolean
  hasBottomBorder?: boolean
}

const CrateInner = ({
  children,
  css,
  hasDots,
  hasXBorder,
  hasXSpacing = true,
  hasYBorder,
  hasTopBorder,
  hasBottomBorder,
}: CrateInnerProps) => {
  const baseCss = clsx(
    {
      'px-4 lg:px-12': hasXSpacing,
      'b-x-green': hasXBorder,
      'b-y-green': hasYBorder,
      'b-t-green': hasTopBorder,
      'b-b-green': hasBottomBorder,
      dots: hasDots,
    },
    css
  )
  return <section className={baseCss}>{children}</section>
}

export default CrateInner
