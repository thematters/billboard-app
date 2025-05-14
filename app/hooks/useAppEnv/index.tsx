import { useContext } from 'react'

import { AppEnvContextSource } from '@contexts/AppEnvContext'

const useAppEnv = () => {
  const context = useContext(AppEnvContextSource)
  return context
}

export default useAppEnv
