import clsx from 'clsx'
import { motion } from 'framer-motion'

const Overlay = ({ children, classes, close }: OverlayPropsType) => {
  const baseCss = clsx('fixed inset-0 z-40 backdrop-blur-xs', classes)

  return (
    <motion.div
      className={baseCss}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      onClick={close}
    >
      {children}
    </motion.div>
  )
}

export default Overlay
