import type { ComponentProps } from '@types'

import { useOutletContext } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useEffect, useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

import SvgMetaMask from '@svgs/MetaMask'
import SvgSpinner from '@svgs/Spinner'
import SvgWalletConnect from '@svgs/WalletConnect'

type WalletOption = 'metaMask' | 'walletConnect' | 'none'

const Options = ({ children }: ComponentProps) => {
  const context = useOutletContext()
  const [option, setOption] = useState<WalletOption>('none')
  const { isConnecting } = useAccount()
  const { connectors, connect } = useConnect()

  const metaMask = _.find(connectors, { id: 'metaMask' })
  const walletConnect = _.find(connectors, { id: 'walletConnect' })

  const baseCss = clsx('mb-6', 'grid grid-cols-1', 'gap-y-4')

  return (
    <section className={baseCss}>
      <Option
        connector={metaMask}
        click={() => {
          connect({ connector: metaMask, chainId: context.chainId })
          setOption('metaMask')
        }}
        isConnecting={isConnecting && option === 'metaMask'}
      >
        <SvgMetaMask />
        MetaMask
      </Option>
      <Option
        connector={walletConnect}
        click={() => {
          connect({ connector: walletConnect, chainId: context.chainId })
          setOption('walletConnect')
        }}
        isConnecting={isConnecting && option === 'walletConnect'}
      >
        <SvgWalletConnect />
        WalletConnect
      </Option>
    </section>
  )
}

type OptionProps = ComponentProps & {
  connector: any
  click: () => void
  isConnecting: boolean
}

const Option = ({ children, connector, click, isConnecting }) => {
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

export default Options
