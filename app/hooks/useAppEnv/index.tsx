import { useContext } from 'react'

import { AppEnvContextSource } from '@contexts/AppEnv'

const useAppEnv = () => {
  const context = useContext(AppEnvContextSource)
  return context
}

export default useAppEnv
