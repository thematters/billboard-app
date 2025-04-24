// General types
type ComponentPropsType = {
  children: React.ReactNode
  classes?: string
}

// Overlay types
type OverlayPropsType = {
  children?: React.ReactNode
  classes?: string
  close: () => void
}

// Drawer types
type DrawerStateType = {
  me: boolean
  menu: boolean
}

type DrawerIdType = 'me' | 'menu'

type DrawerActionType = {
  id: DrawerIdType
  type: 'close' | 'open'
}

type DrawerContextType = {
  state: DrawerStateType
  close: (id: DrawerIdType) => void
  open: (id: DrawerIdType) => void
}

// Modal Types
type ModalStateType = {
  wallet: boolean
}

type ModalIdType = 'wallet'

type ModalActionType = {
  id: ModalIdType
  type: 'close' | 'open'
}

type ModalContextType = {
  state: ModalStateType
  close: (id: ModalIdType) => void
  open: (id: ModalIdType) => void
}

// SVG Types
type SVGPropsType = {
  classes?: string
  width?: number | string
  height?: number | string
}
