import SvgCross from '@svg/Cross'

const Decorator = () => {
  const baseCss = 'px-2 pt-6 f-center-between text-green'
  const lineCss = 'mx-4 w-full b-t-green'

  return (
    <section className={baseCss}>
      <SvgCross />
      <div className={lineCss} />
      <SvgCross />
    </section>
  )
}

export default Decorator
