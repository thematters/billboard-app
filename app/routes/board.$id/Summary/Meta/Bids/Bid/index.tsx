import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Avatar from '@components/Avatar'
import LinkSvg from '@components/Svg/Link'

type PropsType = {
  bid: Record<string, Anything>
}

const Bid = ({ bid }: PropsType) => {
  const { bidder, bidderAddress, link, price, updatedAt } = bid

  const baseCss = clsx('f-row-cb py-3')
  const bidCss = clsx('f-row-cs gap-x-2')
  const bidderCss = clsx('text-sm text-white font-semibold')
  const infoCss = clsx('f-row-cs mt-2')
  const timeCss = clsx('text-xs text-gray-50 font-normal')
  const hashCss = clsx(
    'f-row-cs text-xs text-gray-30 hover:text-gray-10 font-semibold'
  )
  const linkCss = clsx('ml-1')
  const priceCss = clsx('self-start')

  return (
    <div className={baseCss}>
      <div className={bidCss}>
        <Avatar address={bidderAddress} />
        <div>
          <p className={bidderCss}>{bidder}</p>
          <div className={infoCss}>
            <span className={timeCss}>
              {updatedAt}&nbsp;&nbsp;·&nbsp;&nbsp;
            </span>
            <NavLink className={hashCss} to={link} target="_blank">
              TxHash
              <LinkSvg classes={linkCss} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className={priceCss}>{price} USDT</div>
    </div>
  )
}

export default Bid
