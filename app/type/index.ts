import type { Chain } from 'viem'

export type AppContext = {
  env: string
  chain: Chain
  chainId: number
  addressOperator: string
  addressRegistry: string
  addressDistribution: string
  addressMulticall3: string
  tokenIdShowCase: number
  keyWalletConnect: string
  urlOpExplorer: string
  urlCoinGecko: string
  urlContract: string
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
