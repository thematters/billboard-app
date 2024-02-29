import clsx from 'clsx'

const Sketch = () => {
  const css = clsx(
    'relative',
    'h-[250px] lg:h-[470px]',
    'h-min-[250px] lg:h-max-[470px]'
  )

  const bgCss = clsx(
    'absolute -top-px',
    '-left-8 lg:-left-20',
    'h-full w-screen',
    'sketch'
  )

  return (
    <section className={css}>
      <section className={bgCss} />
    </section>
  )
}

export default Sketch
