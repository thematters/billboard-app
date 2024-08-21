import type { ComponentProps } from '@type'
import type { Connector, CreateConnectorFn } from 'wagmi'

import { find } from 'lodash-es'
import { useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

import useEnvs from '@hook/useEnvs'
import SvgMetaMask from '@svg/MetaMask'
import SvgSpinner from '@svg/Spinner'
import SvgWalletConnect from '@svg/WalletConnect'

import Option from './Option'

type WalletOption = 'metaMask' | 'walletConnect' | 'none'

const Options = ({ children }: ComponentProps) => {
  const [option, setOption] = useState<WalletOption>('none')
  const { isConnecting } = useAccount()
  const { connectors, connect } = useConnect()
  const envs = useEnvs()

  const metaMask = find(connectors, { id: 'metaMask' }) as Connector
  const walletConnect = find(connectors, { id: 'walletConnect' }) as Connector

  const baseCss = 'mb-6 cols-1 gap-y-4'

  return (
    <section className={baseCss}>
      <Option
        connector={metaMask}
        click={() => {
          connect({ connector: metaMask, chainId: envs.chainId })
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
          connect({ connector: walletConnect, chainId: envs.chainId })
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
