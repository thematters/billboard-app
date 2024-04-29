import type { ComponentProps } from '@type'

import clsx from 'clsx'

type CrateInnerProps = ComponentProps & {
  hasDots?: boolean
  hasXBorder?: boolean
  hasXSpacing?: boolean
  hasYBorder?: boolean
  hasTopBorder?: boolean
  hasBottomBorder?: boolean
  hasSideDeco?: boolean
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
  hasSideDeco,
}: CrateInnerProps) => {
  const baseCss = clsx(
    {
      'px-4 lg:px-12': hasXSpacing,
      'b-x-green': hasXBorder,
      'b-y-green': hasYBorder,
      'b-t-green': hasTopBorder,
      'b-b-green': hasBottomBorder,
      'side-deco-sm md:side-deco-md relative': hasSideDeco,
      dots: hasDots,
    },
    css
  )
  return <section className={baseCss}>{children}</section>
}

export default CrateInner
