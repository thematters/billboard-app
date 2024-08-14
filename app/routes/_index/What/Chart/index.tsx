import SvgChart from '@svg/Chart'

const Chart = () => {
  const baseCss =
    'mt-10 mb-4 md:mb-10 cols-1 md:cols-3 gap-x-0 md:gap-x-10 gap-y-10'
  const svgCss = 'h-[235px] w-[311px] md:h-full md:w-full f-center mx-auto'
  const descCss = 'col-span-2 f-col-center mt-6 lg:my-10'
  const h4Css = 't-20 lg:t-28 font-bold'
  const pCss = 't-14 lg:t-20 mt-6'

  return (
    <section className={baseCss}>
      <SvgChart css={svgCss} width="100%" height="100%" />
      <div className={descCss}>
        <h4 className={h4Css}>
          Every billboard NFT is continuously auctioned under the Harberger Tax,
          making it a profitable digital asset.
        </h4>
        <p className={pCss}>
          Billboard NFTs are an investment—trade billboard NFTs and profit when
          sold at higher prices. The Harberger Tax governs the billboard NFT,
          utilizing market competition to price and monetize billboard spaces
          efficiently.
        </p>
      </div>
    </section>
  )
}

export default Chart
