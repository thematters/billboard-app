import { NavLink, useNavigate } from '@remix-run/react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import ButtonBase from '@component/Button/Base'
import useEnvs from '@hook/useEnvs'
import SvgLink from '@svg/Link'
import { publish } from '@util/event'
import { formatRoundId } from '@util/format'
import { toFloatUSDT } from '@util/num'

type Props = {
  data: Record<string, any>
}

const Auction = ({ data }: Props) => {
  const envs = useEnvs()
  const navigate = useNavigate()
  const { address, isConnected } = useAccount()
  const { board, currBid, epoch, epochRange, bidCount, highestBid } = data

  const price = toFloatUSDT(Number(highestBid?.price || 0), 2)
  const currPrice = toFloatUSDT(Number(currBid?.price || 0), 2)

  const isEstablished = isAddress(address || '') && isConnected
  const isBidder = currBid && currBid.placedAt > 0
  const isHighestBidder = highestBid?.bidder === address

  const redirectToBid = () => {
    const params = new URLSearchParams({
      id: envs.tokenIdShowCase.toString(),
      epoch,
      from: 'showcase',
    }).toString()
    navigate(`/bid?${params}`)
  }

  const openWalletModal = () => {
    publish('wallet-open', {
      callback: () => () => redirectToBid(),
    })
  }

  const click = () => {
    if (!isEstablished) {
      openWalletModal()
      return
    }
    redirectToBid()
  }

  const baseCss = 'mt-6 md:mt-0'
  const nameCss = 't-20 font-medium'
  const epochCss = 'mt-6 t-12 md:t-16 font-noraml cols-1 gap-y-1'
  const timeCss = 'text-grass font-semibold'
  const highestCss = 'mt-6 pb-6 b-b-dashed border-beige/30'
  const highestNameCss = 't-12 md:t-14 text-beige/60'
  const highestPriceCss = 't-28 md:t-36 font-medium'
  const btnCss = 't-18 w-full f-center'
  const currBidCss = 't-14 ml-2 font-normal'
  const hintCss = 'mt-2 t-14 text-beige/30'
  const hintOutbidCss = 'mt-2 t-14 text-[#fffc62]/60'

  return (
    <section className={baseCss}>
      <h1 className={nameCss}>{board.name}</h1>

      <div className={epochCss}>
        <p>Auction No. {formatRoundId(`${epoch}`)}</p>
        <p className={timeCss}>
          {bidCount} bids
          <span className="mx-2">·</span>
          Ends on {epochRange.end}
        </p>
      </div>

      <div className={highestCss}>
        <p className={highestNameCss}>Highest Bid</p>
        <p className={highestPriceCss}>{price} USDT</p>
      </div>

      <div className="mt-6">
        <ButtonBase css={btnCss} color="grass" click={click}>
          {isBidder ? (
            <>
              Update Bid <span className={currBidCss}>({currPrice} USDT)</span>
            </>
          ) : (
            'Place Bid'
          )}
        </ButtonBase>
        {isBidder && (
          <>
            {isHighestBidder ? (
              <p className={hintCss}>Your bid is the highest.</p>
            ) : (
              <p className={hintOutbidCss}>
                You've been outbid. Update your bid to raise the bid price.
              </p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default Auction
