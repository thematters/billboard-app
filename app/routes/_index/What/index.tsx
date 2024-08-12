import Crate from '@component/Crate'

import Auction from './Auction'
import Chart from './Chart'
import Protocol from './Protocol'
import Revenue from './Revenue'

const What = () => {
  const titleCss = 't-20 md:t-36 font-cyber f-center'
  const numberCss = 'text-green lg-shown'
  const listCss = 'max-limit cols-1 lg:py-5'

  return (
    <>
      {/* Title */}
      <Crate>
        <Crate.Inner css="py-4" hasDots hasXBorder hasYBorder>
          <div className={titleCss}>
            <span className={numberCss}>002</span>
            <div className="slash"></div>
            <span className="text-white">WHAT'S NEW&nbsp;</span>
            <span className="text-grass">& WHY</span>
          </div>
        </Crate.Inner>
      </Crate>

      {/* Content */}
      <Crate>
        <Crate.Inner hasDots hasXBorder>
          <div className={listCss}>
            <Chart />
            <Revenue />
            <Auction />
            <Protocol />
          </div>
        </Crate.Inner>
      </Crate>
    </>
  )
}

export default What
