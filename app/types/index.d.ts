// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Anything = any

// App env types
type AppEnvType = {
  env: string
  chain: Chain
  chainId: number
  addressOperator: string
  addressRegistry: string
  addressDistribution: string
  addressMulticall3: string
  addressUSDT: string
  tokenIdShowCase: string
  idWalletConnect: string
  urlOpExplorer: string
  urlContract: string
  gaId: string
}

// General types
type ComponentPropsType = {
  children: React.ReactNode
  classes?: string
}

// Overlay types
type OverlayPropsType = {
  children?: React.ReactNode
  classes?: string
  close?: () => void
}

// Drawer types
type DrawerStateType = {
  me: boolean
  menu: boolean
}

type DrawerIdType = 'me' | 'menu'

type DrawerActionType = {
  id?: DrawerIdType
  type: 'close' | 'open' | 'reset'
}

type DrawerContextType = {
  state: DrawerStateType
  close: (id: DrawerIdType, cb?: Anything) => void
  open: (id: DrawerIdType) => void
  reset: () => void
}

// Modal types
type ModalStateType = {
  wallet: boolean
  whitelist: boolean
}

type ModalIdType = 'wallet' | 'whitelist'

type ModalActionType = {
  id?: ModalIdType
  type: 'close' | 'open' | 'reset'
}

type ModalContextType = {
  state: ModalStateType
  close: (id: ModalIdType, cb?: AnyFunc) => void
  open: (id: ModalIdType) => void
  reset: () => void
}

// SVG types
type SVGPropsType = {
  classes?: string
  width?: number | string
  height?: number | string
}

// Bid Step types
type BidStepType = 'connect' | 'verify' | 'unauthed' | 'setup'

type SetBidStepType = 'set-price' | 'set-image' | 'set-confirm'
