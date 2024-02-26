import clsx from 'clsx'

import Crate from '~/components/Crate'

import Auction from './Auction'
import Chart from './Chart'
import Protocol from './Protocol'
import Revenue from './Revenue'

const What = () => {
  const titleCss = clsx('t-20 md:t-36', 'font-cyber', 'f-center')

  const numberCss = clsx('text-green', 'hidden lg:block')

  const listCss = clsx('max-limit', 'grid grid-cols-1', 'lg:py-5')

  return (
    <>
      {/* Title */}
      <Crate>
        <Crate.Inner customCss="py-4" hasDots hasXBorder hasYBorder>
          <section className={titleCss}>
            <span className={numberCss}>002</span>
            <div className="slash"></div>
            <span className="text-white">WHAT'S NEW&nbsp;</span>
            <span className="text-grass">& WHY</span>
          </section>
        </Crate.Inner>
      </Crate>

      {/* Content */}
      <Crate>
        <Crate.Inner hasDots hasXBorder>
          <section className={listCss}>
            <Chart />
            <Revenue />
            <Auction />
            <Protocol />
          </section>
        </Crate.Inner>
      </Crate>
    </>
  )
}

export default What
