import { createContext } from 'react'

type PropsType = {
  children: React.ReactNode
  env: AppEnvType
}

export const AppEnvContextSource = createContext({} as AppEnvType)

const AppEnvContext = ({ children, env }: PropsType) => {
  return (
    <AppEnvContextSource.Provider value={env}>
      {children}
    </AppEnvContextSource.Provider>
  )
}

export default AppEnvContext
