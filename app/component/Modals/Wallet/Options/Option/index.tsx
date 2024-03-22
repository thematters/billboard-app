import type { ComponentProps } from '@type'

import clsx from 'clsx'

import SvgSpinner from '@svg/Spinner'

type OptionProps = ComponentProps & {
  connector: any
  click: () => void
  isConnecting: boolean
}

const Option = ({ children, connector, click, isConnecting }: OptionProps) => {
  const itemCss = clsx(
    'px-4 py-3',
    'border border-green',
    'rounded-lg',
    'f-center-between',
    {
      'cursor-pointer': !!connector,
    }
  )
  const spinnerCss = clsx({
    'animate-spin opacity-100': isConnecting,
    'animate-none opacity-0': !isConnecting,
  })

  return (
    <button className={itemCss} disabled={!connector} onClick={click}>
      {children}
      <SvgSpinner css={spinnerCss} />
    </button>
  )
}

export default Option
