import clsx from 'clsx'

import Crate from '~/components/Crate'

import Roles from './Roles'

const Work = () => {
  const innerCss = clsx('py-10 lg:py-[4.5rem]')

  const descCss = clsx('t-14 lg:t-20')

  return (
    <Crate>
      <Crate.Inner customCss={innerCss} hasDots hasXBorder hasTopBorder>
        <section className="max-limit">
          {/* Title */}
          <section className="section-title">HOW IT WORKS</section>

          {/* Description */}
          <section className={descCss}>
            The on-chain billboard protocol revolutionizes platform attention by
            converting it into NFT billboards through Harberger tax auctions.
            Advertisers have the opportunity to bid on NFTs, enabling them to
            promote their ideas and work through fair and efficient market
            competition. The tax revenue generated from the auctions is then
            distributed back to the platform contributors through quadratic
            funding, ensuring a transparent and equitable allocation.
          </section>

          {/* Roles */}
          <Roles />
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Work
