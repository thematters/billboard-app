import clsx from 'clsx'

const Sketch = () => {
  const baseCss =
    'relative h-[250px] lg:h-[470px] h-min-[250px] lg:h-max-[470px]'
  const bgCss =
    'absolute -top-px -left-[33px] lg:-left-20 h-full w-screen sketch'

  return (
    <section className={baseCss}>
      <div className={bgCss} />
    </section>
  )
}

export default Sketch
