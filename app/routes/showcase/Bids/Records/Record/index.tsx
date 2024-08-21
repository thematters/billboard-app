import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgCrown from '@svg/Crown'
import SvgLink from '@svg/Link'

type Props = {
  bid: Record<string, any>
  isHighest?: boolean
}

const Record = ({ bid, isHighest }: Props) => {
  const { price, bidder, placedAt, txHash, link } = bid

  const baseCss = 'px-2 py-4 md:px-4 cols-4 gap-x-4 t-12 md:t-14'
  const borderCss = 'tab-border after:-right-2 after:border-green'
  const cellCss = clsx('f-center-start relative', borderCss)
  const rowCss = clsx(baseCss, 'border-b border-green/40', {
    'bg-olive': isHighest,
  })
  const firstCellCss = clsx('md:f-center-start relative', borderCss)
  const svgCrownCss = 'mb-1 mr-2 md:mb-0'
  const linkCss = 'w-fit f-center-start hover:text-grass trans-300'
  const svgLinkCss = 'md:ml-2 md-shown'

  return (
    <div className={rowCss}>
      <div className={firstCellCss}>
        {isHighest && <SvgCrown css={svgCrownCss} />}
        {price}&nbsp;
        <br className="md-hidden" />
        USDT
      </div>
      <div className={cellCss}>{bidder}</div>
      <div className={cellCss}>{placedAt}</div>
      <div className="f-center-start">
        <NavLink className={linkCss} to={link} target="_blank">
          {txHash}
          <SvgLink css={svgLinkCss} width={12} height={12} />
        </NavLink>
      </div>
    </div>
  )
}

export default Record
