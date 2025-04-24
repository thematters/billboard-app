import { createContext, useMemo, useReducer } from 'react'

const reducer = (state: ModalStateType, action: ModalActionType) => {
  const { id, type } = action
  switch (type) {
    case 'close': {
      return { ...state, [id]: false }
    }
    case 'open': {
      const keys = Object.keys(state) as (keyof ModalStateType)[]
      return keys.reduce((r, key) => {
        r[key] = key === id
        return r
      }, {} as ModalStateType)
    }
    default: {
      return state
    }
  }
}

export const ModalContextSource = createContext<ModalContextType>(
  {} as ModalContextType
)

const ModalContext = ({ children }: ComponentPropsType) => {
  const [state, dispatch] = useReducer(reducer, { wallet: false })

  const close = (id: ModalIdType) => dispatch({ id, type: 'close' })
  const open = (id: ModalIdType) => dispatch({ id, type: 'open' })

  const value = useMemo(() => ({ state, close, open }), [state])
  return (
    <ModalContextSource.Provider value={value}>
      {children}
    </ModalContextSource.Provider>
  )
}

export default ModalContext
