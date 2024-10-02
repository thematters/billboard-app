import type { Chain } from 'viem'

export type AppEnvs = {
  env: string
  chain: Chain
  chainId: number
  addressOperator: string
  addressRegistry: string
  addressDistribution: string
  addressMulticall3: string
  addressUSDT: string
  tokenIdShowCase: number
  idWalletConnect: string
  urlOpExplorer: string
  urlCoinGecko: string
  urlContract: string
  gaId: string
}

export type Analytics = {
  init: () => void
  trackPageView: () => void
}

export type ComponentProps = {
  children?: React.ReactNode
  css?: string
}

export type SVGProps = {
  css?: string
  width?: number | string
  height?: number | string
}

export type ModalControls = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  open: () => void
  close: () => void
}
