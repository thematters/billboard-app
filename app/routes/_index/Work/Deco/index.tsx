const Deco = () => {
  const baseCss = 'relative h-[60px] lg:h-[120px] h-min-[60px] lg:h-max-[120px]'
  const bgCss =
    'absolute -bottom-px right-0 -left-[33px] lg:-left-20 h-full w-screen deco'

  return (
    <section className={baseCss}>
      <div className={bgCss} />
    </section>
  )
}

export default Deco
