import { NavLink, useNavigate } from '@remix-run/react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import ButtonBase from '@component/Button/Base'
import useEnvs from '@hook/useEnvs'
import SvgLink from '@svg/Link'
import { publish } from '@util/event'

type Props = {
  data: Record<string, any>
}

const Auction = ({ data }: Props) => {
  const envs = useEnvs()
  const navigate = useNavigate()
  const { address, isConnected } = useAccount()
  const { board, currBid, epoch, epochRange, highestBid } = data
  const highestBidPrice = (Number(highestBid?.price || 0) / 1e6).toFixed(2)

  const isEstablished = isAddress(address || '') && isConnected
  const hasBid = currBid && currBid > 0

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
  const infoCss = 'pb-6 b-b-dashed border-beige/30'
  const nameCss = 't-20 font-medium'
  const linkCss =
    'mt-1 t-14 w-fit f-center-start text-beige/30 hover:text-grass'
  const bidInfoCss = 'mt-6 t-16 font-medium'
  const bidPriceCss = 't-28 md:t-36 font-medium'
  const bidBtnCss = 'mt-4 t-18 w-full f-center'
  const epochCss = 'mt-6 t-12 md:t-14'
  const epochTimeCss = 'mt-1 t-14 md:t-16 text-grass font-semibold'

  return (
    <section className={baseCss}>
      {/* info */}
      <div className={infoCss}>
        <p className={nameCss}>{board.name}</p>
        <NavLink className={linkCss} to={board.location} target="_blank">
          Board Location
          <SvgLink css="ml-1" width={14} height={14} />
        </NavLink>
      </div>

      {/* bid */}
      <div className="mt-6">
        <p className={bidInfoCss}>Current Highest Bid Price</p>
        <p className={bidPriceCss}>{highestBidPrice} USDT</p>
        <ButtonBase css={bidBtnCss} color="grass" click={click}>
          {hasBid ? 'Update Bid' : 'Place Bid'}
        </ButtonBase>
        <div className={epochCss}>
          <p>Auction Time</p>
          <p className={epochTimeCss}>
            {epochRange.start} - {epochRange.end} (UTC+8)
          </p>
        </div>
      </div>
    </section>
  )
}

export default Auction
