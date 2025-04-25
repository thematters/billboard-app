import { useContext } from 'react'

import { ModalContextSource } from '@contexts/ModalContext'

const useModal = () => {
  const context = useContext<ModalContextType>(ModalContextSource)
  return context
}

export default useModal
