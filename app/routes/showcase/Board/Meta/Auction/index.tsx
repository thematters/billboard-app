import { NavLink, useOutletContext } from '@remix-run/react'
import dayjs from 'dayjs'

import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgLink from '@svg/Link'
import { shortenAddress, formatDate } from '@util/web3'

type Props = {
  data: Record<string, any>
}

const Auction = ({ data }: Props) => {
  const context = useOutletContext()
  const { auction, board, highestBid, taxRate } = data
  const address = shortenAddress(context.addressRegistry)
  const addressLink = `${context.urlOpExplorer}/address/${context.addressOperator}`
  const endAt = formatDate(auction.endAt)

  const auctionCss = clsx('grid grid-cols-1 md:grid-cols-2')
  const priceCss = clsx('t-28 md:t-36', 'md:font-smibold font-bold')
  const btnCss = clsx(
    'px-6 py-2',
    'md:px-6 md:py-4',
    'mt-4 md:mt-0',
    't-16 md:t-18',
    'f-center'
  )
  const endAtCss = clsx('mt-4', 't-12', 'text-grass')
  const endAtTimeCss = clsx('ml-2', 't-16', 'font-semibold')
  const linkCss = clsx('hover:text-grass', 'f-center-end')
  const itemCss = clsx(
    'py-4',
    'w-full',
    'f-center-between',
    'border-b border-dashed border-green/40'
  )
  const itemLastCss = clsx(itemCss, 'border-b-0')

  return (
    <section className="mt-5 md:mt-0">
      <section className="t-14 md:t-16">Last Highest Bid Price</section>
      <section className={auctionCss}>
        <section>
          <section className={priceCss}>
            {(highestBid?.price || 0).toFixed(2)} USDT
          </section>
          <section className="t-12">Tax Rate: {taxRate}</section>
        </section>
        <section className="f-center-start md:f-center-end">
          <ButtonBase css={btnCss} color="green" disabled={true}>
            Place Bid (Beta)
          </ButtonBase>
        </section>
      </section>
      <section className={endAtCss}>
        Bidding result time <span className={endAtTimeCss}>{endAt}</span>
      </section>

      <section className="mt-6">
        <section className={itemCss}>
          <p>Contract (ERC-721)</p>
          <NavLink className={linkCss} to={addressLink} target="_blank">
            {address}
            <SvgLink css="ml-1" width={18} height={18} />
          </NavLink>
        </section>
        <section className={itemCss}>
          <p>Token ID</p>
          <p>{context.tokenIdShowCase}</p>
        </section>
        <section className={itemLastCss}>
          <p>Chain</p>
          <p>Optimism</p>
        </section>
      </section>
    </section>
  )
}

export default Auction
