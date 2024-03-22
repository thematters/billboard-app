import clsx from 'clsx'

const Deco = () => {
  const baseCss = clsx(
    'relative',
    'h-[60px] lg:h-[120px]',
    'h-min-[60px] lg:h-max-[120px]'
  )
  const bgCss = clsx(
    'absolute -bottom-px right-0',
    '-left-8 lg:-left-20',
    'h-full w-screen',
    'deco'
  )

  return (
    <section className={baseCss}>
      <section className={bgCss} />
    </section>
  )
}

export default Deco
