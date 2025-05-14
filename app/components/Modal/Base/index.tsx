import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'usehooks-ts'

import Overlay from '@components/Overlay'
import useModal from '@hooks/useModal'
import useLockScroll from '@hooks/useLockScroll'

import Head from './Head'

type PropsType = ComponentPropsType & {
  id: ModalIdType
  title: string
}

const Base = ({ children, id, title }: PropsType) => {
  const { state, close } = useModal()
  const isSlideIn = useMediaQuery('(max-width: 577px)')
  const isOpen = state[id]

  useLockScroll(isOpen)

  const baseCss = clsx('fixed inset-0 z-50 f-col-ce sm:f-row-cc')
  const modalCss = clsx({
    'p-6 max-h-2/3 w-full sm:max-w-modal bg-gray-90': true,
    'border border-gray-80': true,
    'rounded-t-[20px]': isSlideIn,
    'rounded-[20px]': !isSlideIn,
  })

  const variants = isSlideIn
    ? {
        initial: { y: '100%' },
        animate: { y: 0 },
        exit: { y: '100%' },
      }
    : {
        initial: { opacity: 0, scale: 0.6 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.6 },
      }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay />
          <div className={baseCss}>
            <motion.div
              className={modalCss}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.38, ease: 'easeInOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Head title={title} close={() => close(id)} />
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Base
