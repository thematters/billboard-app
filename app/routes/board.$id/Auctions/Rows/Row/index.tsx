import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import LinkSvg from '@components/Svg/Link'

type PropsType = {
  auction: Record<string, Anything>
}

const Row = ({ auction }: PropsType) => {
  const baseCss = clsx(
    'grid grid-cols-4 gap-x-4 md:gap-x-6',
    'text-xs md:text-base text-gray-30',
    'border-b border-gray-80 border-dashed',
    '[&>div]:py-3 [&>div:last-child]:text-right'
  )

  const linkCss = clsx('f-row-ce hover:text-gray-10')
  const svgCss = clsx('ml-1 w-3 h-3 md:w-3.5 md:h-3.5')

  return (
    <div className={baseCss}>
      <div>{auction.price} USDT</div>
      <div>{auction.bidder}</div>
      <div>{auction.endAt}</div>
      <div>
        <NavLink className={linkCss} to={auction.link} target="_blank">
          {auction.txHash}
          <LinkSvg classes={svgCss} />
        </NavLink>
      </div>
    </div>
  )
}

export default Row
