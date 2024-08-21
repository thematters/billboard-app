import { useEffect, useState } from 'react'

import { subscribe, unsubscribe } from '@util/event'

const useEventModal = (key: string, value: boolean) => {
  const openEvent = `${key}-open`
  const closeEvent = `${key}-close`

  const [isOpen, setIsOpen] = useState<boolean>(value)
  const [callback, setCallback] = useState<any>(null)

  const open = (event?: any) => {
    setIsOpen(true)
    if (event) {
      setCallback(event.detail.callback)
    }
  }

  const close = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    subscribe(openEvent, open)
    subscribe(closeEvent, close)
    return () => {
      unsubscribe(openEvent, open)
      unsubscribe(closeEvent, close)
    }
  }, [])

  return { isOpen, setIsOpen, callback, setCallback, open, close }
}

export default useEventModal
