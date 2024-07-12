import { useState } from 'react'

const useModal = (value: boolean) => {
  const [isOpen, setIsOpen] = useState<boolean>(value)

  const openModal = () => setIsOpen(true)

  const closeModal = () => setIsOpen(false)

  return { isOpen, setIsOpen, openModal, closeModal }
}

export default useModal
