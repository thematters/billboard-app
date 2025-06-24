// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Anything = any

// App env types
type AppEnvType = {
  env: string
  chain: Chain
  chainId: number
  addressOperator: `0x${string}`
  addressRegistry: `0x${string}`
  addressDistribution: `0x${string}`
  addressMulticall3: `0x${string}`
  addressUSDT: `0x${string}`
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

// Bid step types
type BidStepType =
  | 'connect'
  | 'verify'
  | 'unauthed'
  | 'setup'
  | 'success-new'
  | 'success-update'

type SetBidStepType = 'set-price' | 'set-content' | 'set-confirm'

// Edit won bid step types
type EditStepType = 'connect' | 'verify' | 'unauthed' | 'setup' | 'success'

type EditBidStepType = 'set-content' | 'set-confirm'

// My bids step types
type MyBidsStepType = 'connect' | 'bids' | 'success'
