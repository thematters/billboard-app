import type { Connector } from 'wagmi'

import clsx from 'clsx'

import SpinnerSvg from '@components/Svg/Spinner'

type PropsType = ComponentPropsType & {
  name: string
  connector: Connector
  isConnecting: boolean
  onClick: () => void
}

const Option = ({
  children,
  name,
  connector,
  isConnecting,
  onClick,
}: PropsType) => {
  const baseCss = clsx(
    'f-row-cb border border-gray-70 px-4 py-3 rounded-xl w-full',
    { 'cursor-pointer': !!connector }
  )
  const leftCss = clsx('f-row-cs')
  const textCss = clsx('pl-4 text-sm font-semibold')
  const spinnerCss = clsx({
    'animate-spin opacity-100': isConnecting,
    'animate-none opacity-0': !isConnecting,
  })

  return (
    <button className={baseCss} disabled={!connector} onClick={onClick}>
      <section className={leftCss}>
        {children}
        <p className={textCss}>{name}</p>
      </section>
      <SpinnerSvg classes={spinnerCss} />
    </button>
  )
}

export default Option
