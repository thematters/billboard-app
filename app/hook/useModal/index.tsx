import { useState } from 'react'

const useModal = (value: boolean) => {
  const [isOpened, setIsOpened] = useState<boolean>(value)

  const openModal = () => setIsOpened(true)

  const closeModal = () => setIsOpened(false)

  return { isOpened, setIsOpened, openModal, closeModal }
}

export default useModal
