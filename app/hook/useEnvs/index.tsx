import { useContext } from 'react'

import { EnvsContextSource } from '@component/Context/Envs'

const useEnvs = () => {
  const context = useContext(EnvsContextSource)
  return context
}

export default useEnvs
