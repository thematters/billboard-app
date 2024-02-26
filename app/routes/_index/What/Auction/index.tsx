import clsx from 'clsx'

import SvgAuction from '~/components/Svgs/Auction'

const Auction = () => {
  const css = clsx(
    'my-4 md:my-10',
    'grid grid-cols-1 md:grid-cols-3 ',
    'gap-x-0 md:gap-x-10',
    'gap-y-10'
  )

  const svgCss = clsx(
    'h-[235px] w-[311px]',
    'md:h-full md:w-full',
    'f-center',
    'mx-auto'
  )

  const descCss = clsx('col-span-2', 'f-col-center', 'mt-6 lg:mt-10')

  const h4Css = clsx('t-20 lg:t-28', 'font-bold')

  const pCss = clsx('t-14 lg:t-20', 'mt-6')

  return (
    <section className={css}>
      <SvgAuction customCss={svgCss} width="auto" height="auto" />
      <section className={descCss}>
        <h4 className={h4Css}>
          Creators can generate higher direct income through continuous NFT
          billboard auctions and by creating their own NFT billboards.
        </h4>
        <p className={pCss}>
          Thriving billboard transactions generate more tax revenue, fostering
          direct support from readers to creators and creating a buoyant content
          economy.
        </p>
      </section>
    </section>
  )
}

export default Auction
