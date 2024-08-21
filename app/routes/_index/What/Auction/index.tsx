import SvgAuction from '@svg/Auction'

const Auction = () => {
  const baseCss = 'my-4 md:my-10 cols-1 md:cols-3 gap-x-0 md:gap-x-10 gap-y-10'
  const svgCss = 'h-[235px] w-[311px] md:h-full md:w-full f-center mx-auto'
  const descCss = 'col-span-2 f-col-center mt-6 lg:mt-10'
  const h4Css = 't-20 lg:t-28 font-bold'
  const pCss = 't-14 lg:t-20 mt-6'

  return (
    <section className={baseCss}>
      <SvgAuction css={svgCss} width="100%" height="100%" />
      <div className={descCss}>
        <h4 className={h4Css}>
          Creators can generate higher direct income through continuous NFT
          billboard auctions and by creating their own NFT billboards.
        </h4>
        <p className={pCss}>
          Thriving billboard transactions generate more tax revenue, fostering
          direct support from readers to creators and creating a buoyant content
          economy.
        </p>
      </div>
    </section>
  )
}

export default Auction
