import { useEffect } from 'react'
import { toast, Toaster, useToasterStore } from 'react-hot-toast'
import { useMediaQuery } from 'usehooks-ts'

const MAX_SIZE = 3

const Alert = () => {
  const { toasts } = useToasterStore()

  const isSm = useMediaQuery('(max-width: 577px)')
  const isMd = useMediaQuery('(min-width: 578px) and (max-width: 980px)')
  const isLg = useMediaQuery('(min-width: 981px)')

  // set the hard limit
  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .slice(MAX_SIZE)
      .forEach((t) => toast.dismiss(t.id))
  }, [toasts])

  const containerStyle = {
    ...(isSm ? { top: '84px' } : {}),
    zIndex: 30,
  }

  const toastStyle = {
    maxWidth: '343px',
    background: '#FDEC6B',
    padding: '14px 20px',
    marginRight: isLg ? '32px' : isMd ? '20px' : '0px',
  }

  return (
    <Toaster
      position={isSm ? 'top-center' : 'bottom-right'}
      containerStyle={containerStyle}
      toastOptions={{
        duration: 3800,
        style: toastStyle,
      }}
    />
  )
}

export default Alert
