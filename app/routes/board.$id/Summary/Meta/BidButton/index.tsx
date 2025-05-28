import { useNavigate } from '@remix-run/react'
import clsx from 'clsx'
import { useAccount } from 'wagmi'

import GradButton from '@components/Button/Grad'
import useModal from '@hooks/useModal'
import { toFloatUSDT } from '@utils/num'

type PropsType = {
  data: Record<string, Anything>
}

const BidButton = ({ data }: PropsType) => {
  const navigate = useNavigate()
  const { open } = useModal()
  const { isConnected } = useAccount()
  const { board, currBid, epoch, whitelisted } = data

  const id = board.id
  const currPrice = toFloatUSDT(Number(currBid?.price || 0), 2)
  const isBidder = currBid && currBid.placedAt > 0

  const click = () => {
    if (isConnected) {
      if (whitelisted) {
        const params = new URLSearchParams({
          epoch,
          from: 'board',
        }).toString()
        navigate(`/bid/${id}?${params}`)
      } else {
        open('whitelist')
      }
    } else {
      open('wallet')
    }
  }

  const buttonCss = clsx('py-3 w-full md:w-[280px] font-semibold')
  const buttonOuterCss = clsx('mt-8 w-full md:w-fit')

  return (
    <GradButton
      classes={buttonCss}
      outerClasses={buttonOuterCss}
      color="green"
      type="button"
      onClick={click}
    >
      {isConnected && isBidder && <>Place Higher Bid - {currPrice} USDT</>}
      {isConnected && !isBidder && <>Place Bid</>}
      {!isConnected && <>Connect to Place Bid</>}
    </GradButton>
  )
}

export default BidButton
