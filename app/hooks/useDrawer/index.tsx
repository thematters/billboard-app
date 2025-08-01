import { useContext } from 'react'

import { DrawerContextSource } from '@contexts/Drawer'

const useDrawer = () => {
  const context = useContext<DrawerContextType>(DrawerContextSource)
  return context
}

export default useDrawer
