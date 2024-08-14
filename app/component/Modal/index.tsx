import type { ComponentProps } from '@type'

import clsx from 'clsx'

import useLockScroll from '@hook/useLockScroll'

type Props = ComponentProps & {
  isOpened: boolean
  open: (event?: any) => void
  close: () => void
}

const Modal = ({ children, css, isOpened, open, close }: Props) => {
  useLockScroll(isOpened)

  const overlayCss = 'modal-overlay f-end-center sm:f-center'
  const baseCss = clsx('modal', css)

  if (!isOpened) {
    return
  }

  return (
    <section className={overlayCss}>
      <section className={baseCss}>{children}</section>
    </section>
  )
}

export default Modal
