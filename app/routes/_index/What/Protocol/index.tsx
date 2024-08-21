import SvgProtocol from '@svg/Protocol'

const Protocol = () => {
  const baseCss =
    'mt-4 md:mt-10 mb-10 cols-1 md:cols-3 gap-x-0 md:gap-x-10 gap-y-10'
  const svgCss =
    'h-[235px] w-[311px] md:h-full md:w-full f-center mx-auto md:order-last'
  const descCss = 'col-span-2 f-col-center mt-6 lg:my-10'
  const h4Css = 't-20 lg:t-28 font-bold'
  const pCss = 't-14 lg:t-20 mt-6'

  return (
    <section className={baseCss}>
      <SvgProtocol css={svgCss} width="100%" height="100%" />
      <div className={descCss}>
        <h4 className={h4Css}>
          A protocol within an open network that allows for seamless integration
          with a wide range of applications.
        </h4>
        <p className={pCss}>
          This on-chain billboard protocol can be easily integrated into various
          applications, enabling more direct monetization methods and promoting
          fairer distribution.
        </p>
      </div>
    </section>
  )
}

export default Protocol
