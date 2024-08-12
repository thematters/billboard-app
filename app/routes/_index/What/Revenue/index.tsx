import SvgRevenue from '@svg/Revenue'

const Revenue = () => {
  const baseCss = 'my-4 md:my-10 cols-1 md:cols-3 gap-x-0 md:gap-x-10 gap-y-10'
  const svgCss =
    'h-[235px] w-[311px] md:h-full md:w-full f-center mx-auto md:order-last'
  const descCss = 'col-span-2 f-col-center mt-6 lg:my-10'
  const h4Css = 't-20 lg:t-28 font-bold'
  const pCss = 't-14 lg:t-20 mt-6'

  return (
    <section className={baseCss}>
      <SvgRevenue css={svgCss} width="100%" height="100%" />
      <div className={descCss}>
        <h4 className={h4Css}>
          The tax revenue from billboards is distributed to creators
          democratically and efficiently through a quadratic funding mechanism.
        </h4>
        <p className={pCss}>
          Quadratic funding allocates tax revenue based on the quantity and size
          of community donations. It is a democratic and efficient method of
          distributing platform revenue, ensuring that creators who generate
          contributions receive the matching funding. This collective
          decision-making process is dynamic and can be constantly evolving.
        </p>
      </div>
    </section>
  )
}

export default Revenue
