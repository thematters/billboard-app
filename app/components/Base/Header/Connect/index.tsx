import clsx from 'clsx'

import MonoButton from '@components/Button/Mono'
import WalletSvg from '@components/Svg/Wallet'
import useModal from '@hooks/useModal'

const Connect = () => {
  const { open } = useModal()

  const click = () => open('wallet')

  const baseCss = clsx('f-row-cc min-w-8 min-h-8 font-semibold md:h-10 md:px-5')
  const connectCss = clsx('pl-2 hidden md:block')
  const walletCss = clsx('pl-2 hidden ml:block')

  return (
    <MonoButton
      classes={baseCss}
      color="gray"
      type="button"
      shape="circle"
      onClick={click}
    >
      <WalletSvg />
      <span className={connectCss}>Connect</span>
      <span className={walletCss}>Wallet</span>
    </MonoButton>
  )
}

export default Connect
