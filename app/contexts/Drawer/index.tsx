import { createContext, useMemo, useReducer } from 'react'

const reducer = (state: DrawerStateType, action: DrawerActionType) => {
  const { id, type } = action
  switch (type) {
    case 'close': {
      return id ? { ...state, [id]: false } : state
    }
    case 'open': {
      const keys = Object.keys(state) as (keyof DrawerStateType)[]
      return keys.reduce<DrawerStateType>((r, key) => {
        r[key] = key === id
        return r
      }, {} as DrawerStateType)
    }
    case 'reset': {
      return Object.fromEntries(
        Object.keys(state).map((key) => [key, false])
      ) as DrawerStateType
    }
    default: {
      return state
    }
  }
}

export const DrawerContextSource = createContext<DrawerContextType>(
  {} as DrawerContextType
)

const DrawerContext = ({ children }: ComponentPropsType) => {
  const [state, dispatch] = useReducer(reducer, { me: false, menu: false })

  const close = (id: DrawerIdType, cb?: () => void) => {
    dispatch({ id, type: 'close' })
    requestAnimationFrame(() => cb?.())
  }
  const open = (id: DrawerIdType) => dispatch({ id, type: 'open' })
  const reset = () => dispatch({ type: 'reset' })

  const value = useMemo(() => ({ state, close, open, reset }), [state])
  return (
    <DrawerContextSource.Provider value={value}>
      {children}
    </DrawerContextSource.Provider>
  )
}

export default DrawerContext
