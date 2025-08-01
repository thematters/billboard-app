import type { Connector } from 'wagmi'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import find from 'lodash-es/find'
import { useEffect, useState } from 'react'
import { isAddress } from 'viem'
import { useAccount, useConnect } from 'wagmi'

import MetaMaskSvg from '@components/Svg/MetaMask'
import WalletConnectSvg from '@components/Svg/WalletConnect'
import { METAMASK_LINK } from '@constants'
import useAlert from '@hooks/useAlert'
import useAppEnv from '@hooks/useAppEnv'
import useModal from '@hooks/useModal'

import Base from '../Base'

import Option from './Option'

type WalletOption = 'metaMask' | 'walletConnect' | 'none'

const WalletModal = () => {
  const env = useAppEnv()
  const { close } = useModal()
  const { makeAlert } = useAlert()
  const { address, isConnected, isConnecting } = useAccount()
  const { connect, connectors } = useConnect()
  const [selected, setSelected] = useState<WalletOption>('none')

  const metaMask = find(connectors, { id: 'metaMask' }) as Connector
  const walletConnect = find(connectors, { id: 'walletConnect' }) as Connector

  useEffect(() => {
    const isEstablished = isAddress(address || '') && isConnected
    if (isEstablished) {
      close('wallet', makeAlert("You're connected"))
    }
  }, [address, isConnected])

  const baseCss = clsx('pt-6 space-y-4')
  const hintCss = clsx(
    'f-row-cc mt-5 text-xs text-green-30 hover:text-green-20 font-normal',
    'transition-all duration-500'
  )
  const agreementCss = clsx('mt-4 px-6 text-xs text-gray-70 text-center')
  const agreementLinkCss = clsx('underline underline-offset-1')

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

      <NavLink className={hintCss} to={METAMASK_LINK} target="_blank">
        Don't have a MetaMask wallet
      </NavLink>

      <section className={agreementCss}>
        Continued use indicates your agreement to the{' '}
        <NavLink className={agreementLinkCss} to="/agreement" target="_blank">
          User Agreement
        </NavLink>
        .
      </section>
    </Base>
  )
}

export default WalletModal
