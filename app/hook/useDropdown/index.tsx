import {
  autoUpdate,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useState } from 'react'

const useDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { context, floatingStyles, refs } = useFloating({
    placement: 'bottom-end',
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10)],
    whileElementsMounted: autoUpdate,
  })

  const click = useClick(context)
  const close = useDismiss(context)
  const role = useRole(context)
  return {
    context,
    props: useInteractions([click, close, role]),
    refs,
    state: { isOpen, setIsOpen },
    styles: floatingStyles,
  }
}

export default useDropdown
