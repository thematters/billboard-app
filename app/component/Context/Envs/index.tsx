import type { AppEnvs } from '@type'
import type React from 'react'

import { createContext } from 'react'

type Props = {
  children: React.ReactNode
  envs: AppEnvs
}

export const EnvsContextSource = createContext({} as AppEnvs)

const EnvsContext = ({ children, envs }: Props) => {
  return (
    <EnvsContextSource.Provider value={envs}>
      {children}
    </EnvsContextSource.Provider>
  )
}

export default EnvsContext
