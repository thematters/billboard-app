import type { ComponentProps } from '@type'

import clsx from 'clsx'

import SvgCancel from '@svg/Cancel'

type Props = ComponentProps & {
  close: () => void
}

const Head = ({ close }: Props) => {
  const baseCss = clsx('f-center-between', 'sm:f-center')
  const titleCss = clsx('t-20', 'text-grass', 'font-bold')
  const cancelCss = clsx('sm-hidden', 'text-white')

  return (
    <section className={baseCss}>
      <section className={titleCss}>Claim</section>
      <section className={cancelCss} onClick={close}>
        <SvgCancel />
      </section>
    </section>
  )
}

export default Head
