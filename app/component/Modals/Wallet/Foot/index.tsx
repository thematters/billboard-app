import type { ComponentProps } from '@type'

import clsx from 'clsx'

type Props = ComponentProps & {
  close: () => void
}

const Foot = ({ children, close }: Props) => {
  const baseCss = clsx('hidden', 'sm:f-center-end')

  const btnCss = clsx('w-fit', 'cursor-pointer')

  return (
    <section className={baseCss}>
      <section className={btnCss} onClick={close}>
        Cancel
      </section>
    </section>
  )
}

export default Foot
