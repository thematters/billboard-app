import clsx from 'clsx'

import BaseButton from '@components/Button/Base'
import WalletSvg from '@components/Svg/Wallet'
import useModal from '@hooks/useModal'

const Connect = () => {
  const { open } = useModal()

  const baseCss = clsx(
    'fcc size-8 rounded-full font-semibold md:h-10 md:px-5 md:w-min'
  )
  const connectCss = clsx('pl-2 hidden md:block')
  const walletCss = clsx('pl-2 hidden ml:block')

  return (
    <BaseButton classes={baseCss} color="gray" onClick={() => open('wallet')}>
      <WalletSvg />
      <span className={connectCss}>Connect</span>
      <span className={walletCss}>Wallet</span>
    </BaseButton>
  )
}

export default Connect
