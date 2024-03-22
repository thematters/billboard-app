import type { AppContext, ComponentProps } from '@type'
import type { Connector, CreateConnectorFn } from 'wagmi'

import { useOutletContext } from '@remix-run/react'
import clsx from 'clsx'
import _ from 'lodash'
import { useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

import SvgMetaMask from '@svg/MetaMask'
import SvgSpinner from '@svg/Spinner'
import SvgWalletConnect from '@svg/WalletConnect'

import Option from './Option'

type WalletOption = 'metaMask' | 'walletConnect' | 'none'

const Options = ({ children }: ComponentProps) => {
  const context = useOutletContext<AppContext>()
  const [option, setOption] = useState<WalletOption>('none')
  const { isConnecting } = useAccount()
  const { connectors, connect } = useConnect()

  const metaMask = _.find(connectors, { id: 'metaMask' }) as Connector
  const walletConnect = _.find(connectors, { id: 'walletConnect' }) as Connector

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

export default Options
