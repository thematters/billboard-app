import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'

import Overlay from '@components/Overlay'
import useDrawer from '@hooks/useDrawer'
import useLockScroll from '@hooks/useLockScroll'

type Props = ComponentPropsType & {
  id: DrawerIdType
}

const Base = ({ children, classes, id }: Props) => {
  const { state, close } = useDrawer()
  const isOpen = state[id]

  useLockScroll(isOpen)

  const drawerCss = clsx(
    'fixed top-0 right-0 z-50 w-full h-full max-w-drawer bg-gray-900',
    'px-4 py-[22px] drawer:p-10',
    'drawer:border-l-[1px] border-gray-800',
    classes
  )

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <Overlay close={() => close(id)} />
          <motion.aside
            className={drawerCss}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.48, ease: 'easeInOut' }}
          >
            {children}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export default Base
