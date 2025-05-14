import type { Connector } from 'wagmi'

import clsx from 'clsx'
import { find } from 'lodash-es'
import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import { useAccount, useConnect } from 'wagmi'

import MetaMaskSvg from '@components/Svg/MetaMask'
import WalletConnectSvg from '@components/Svg/WalletConnect'
import useAppEnv from '@hooks/useAppEnv'
import useModal from '@hooks/useModal'

import Base from '../Base'

import Option from './Option'

type WalletOption = 'metaMask' | 'walletConnect' | 'none'

const WalletModal = () => {
  const env = useAppEnv()
  const { close } = useModal()
  const { address, isConnected, isConnecting } = useAccount()
  const { connect, connectors } = useConnect()
  const [selected, setSelected] = useState<WalletOption>('none')

  const metaMask = find(connectors, { id: 'metaMask' }) as Connector
  const walletConnect = find(connectors, { id: 'walletConnect' }) as Connector

  useEffect(() => {
    const isEstablished = isAddress(address || '') && isConnected
    if (isEstablished) {
      close('wallet')
    }
  }, [address, isConnected])

  const baseCss = clsx('pt-6 space-y-4')

  return (
    <Base id="wallet" title="Connect Wallet">
      <section className={baseCss}>
        <Option
          name="MetaMask"
          connector={metaMask}
          isConnecting={isConnecting && selected === 'metaMask'}
          onClick={() => {
            connect({ connector: metaMask, chainId: env.chainId })
            setSelected('metaMask')
          }}
        >
          <MetaMaskSvg />
        </Option>
        <Option
          name="WalletConnect"
          connector={walletConnect}
          isConnecting={isConnecting && selected === 'walletConnect'}
          onClick={() => {
            connect({ connector: walletConnect, chainId: env.chainId })
            setSelected('walletConnect')
          }}
        >
          <WalletConnectSvg />
        </Option>
      </section>
    </Base>
  )
}

export default WalletModal
