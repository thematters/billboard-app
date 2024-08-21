import type { ComponentProps } from '@type'

type Props = ComponentProps & {
  close: () => void
}

const Foot = ({ children, close }: Props) => {
  const baseCss = 'hidden sm:f-center-end'
  const btnCss = 'w-fit cursor-pointer'

  return (
    <section className={baseCss}>
      <section className={btnCss} onClick={close}>
        Cancel
      </section>
    </section>
  )
}

export default Foot
