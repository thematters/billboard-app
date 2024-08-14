import Crate from '@component/Crate'

import Deco from './Deco'
import Roles from './Roles'

const Work = () => {
  const baseCss = 'pb-12 pt-10 lg:py-[4.rem] max-limit'
  const descCss = 't-14 lg:t-20'

  return (
    <Crate>
      <Crate.Inner hasDots hasXBorder hasTopBorder>
        <section className={baseCss}>
          {/* Title */}
          <h1 className="section-title">HOW IT WORKS</h1>

          {/* Description */}
          <p className={descCss}>
            The on-chain billboard protocol revolutionizes platform attention by
            converting it into NFT billboards through Harberger tax auctions.
            Advertisers can bid on NFTs, enabling them to promote their ideas
            and work through fair and efficient market competition. The tax
            revenue generated from the auctions is then distributed back to the
            platform contributors through quadratic funding, ensuring a
            transparent and equitable allocation.
          </p>

          {/* Roles */}
          <Roles />
        </section>

        {/* Decorator */}
        <Deco />
      </Crate.Inner>
    </Crate>
  )
}

export default Work
