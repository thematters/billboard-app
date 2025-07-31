import { createContext, useMemo, useReducer } from 'react'

const reducer = (state: ModalStateType, action: ModalActionType) => {
  const { id, type } = action
  switch (type) {
    case 'close': {
      return id ? { ...state, [id]: false } : state
    }
    case 'open': {
      const keys = Object.keys(state) as (keyof ModalStateType)[]
      return keys.reduce((r, key) => {
        r[key] = key === id
        return r
      }, {} as ModalStateType)
    }
    case 'reset': {
      return Object.fromEntries(
        Object.keys(state).map((key) => [key, false])
      ) as ModalStateType
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
  const [state, dispatch] = useReducer(reducer, {
    wallet: false,
    whitelist: false,
  })

  const close = (id: ModalIdType, cb?: () => void) => {
    dispatch({ id, type: 'close' })
    requestAnimationFrame(() => cb?.())
  }
  const open = (id: ModalIdType) => dispatch({ id, type: 'open' })
  const reset = () => dispatch({ type: 'reset' })

  const value = useMemo(() => ({ state, close, open, reset }), [state])
  return (
    <ModalContextSource.Provider value={value}>
      {children}
    </ModalContextSource.Provider>
  )
}

export default ModalContext
