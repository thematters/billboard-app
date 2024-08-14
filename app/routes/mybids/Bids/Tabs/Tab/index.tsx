import type { ComponentProps } from '@type'

import clsx from 'clsx'

type Props = ComponentProps & {
  isActive: boolean
  onClick: () => void
}

const Tab = ({ css, children, isActive, onClick }: Props) => {
  const baseCss = clsx(
    't-14 md:t-18 trans-300 rounded-xl bg-black px-2 py-1 md:px-6 md:py-2',
    {
      'border border-white': isActive,
      'cursor-pointer border border-black': !isActive,
    },
    css
  )

  return (
    <div className={baseCss} onClick={onClick}>
      {children}
    </div>
  )
}

export default Tab
