import clsx from 'clsx'

import MonoButton from '@components/Button/Mono'
import CloseSvg from '@components/Svg/Close'

type PropsType = {
  title: string
  close: () => void
}

const Head = ({ title, close }: PropsType) => {
  const baseCss = clsx('grid grid-cols-[1fr_auto_1fr] items-center')
  const titleCss = clsx('text-center text-xl font-semibold')
  const buttonCss = clsx('justify-self-end f-row-cc size-9')

  return (
    <section className={baseCss}>
      <div />
      <p className={titleCss}>{title}</p>
      <MonoButton
        classes={buttonCss}
        color="gray"
        shape="circle"
        onClick={close}
      >
        <CloseSvg />
      </MonoButton>
    </section>
  )
}

export default Head
