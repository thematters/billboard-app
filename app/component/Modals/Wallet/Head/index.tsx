import type { ComponentProps } from '@type'

import SvgCancel from '@svg/Cancel'

type Props = ComponentProps & {
  close: () => void
}

const Head = ({ close }: Props) => {
  const baseCss = 'f-center-between sm:f-center'
  const titleCss = 't-20 text-grass font-bold'
  const cancelCss = 'sm-hidden text-white'

  return (
    <section className={baseCss}>
      <section className={titleCss}>Connect Wallet</section>
      <section className={cancelCss} onClick={close}>
        <SvgCancel />
      </section>
    </section>
  )
}

export default Head
