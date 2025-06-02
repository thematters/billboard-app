import clsx from 'clsx'
import { useAccount, useBalance } from 'wagmi'

import useAppEnv from '@hooks/useAppEnv'
import { calTax, calTotalAmount, calTotalDiff, toFloatUSDT } from '@utils/num'

import Balance from '../Balance'
import Detail from '../Detail'
import State from '../State'

import Controls from './Controls'
import PriceInput from './PriceInput'

type PropsType = {
  data: Record<string, Anything>
  price: number
  priceChanged: boolean
  setPrice: (value: number) => void
  setPriceChanged: (value: boolean) => void
  updateSetBidStep: (value: SetBidStepType) => void
}

const SetPrice = ({
  data,
  price,
  priceChanged,
  setPrice,
  setPriceChanged,
  updateSetBidStep,
}: PropsType) => {
  const { board, bid, highestBid } = data

  const { addressUSDT } = useAppEnv()
  const { address } = useAccount()
  const { data: balanceData } = useBalance({
    address,
    token: addressUSDT as `0x${string}`,
  })

  // data
  const balance = Number(balanceData?.formatted || 0)
  const lastBidPrice = Number(toFloatUSDT(Number(bid?.price || 0)))
  const highestBidPrice = Number(toFloatUSDT(Number(highestBid?.price || 0)))
  const taxRate = Number(board?.taxRate || 0)
  const tax = Number(calTax(price, taxRate, 2))
  const totalAmount = Number(calTotalAmount(price, taxRate, 2))
  const totalDiff = Number(calTotalDiff(price, lastBidPrice, taxRate))

  // condition
  const hasBid = Number(bid?.placedAt || 0) > 0
  const isSufficient = hasBid ? balance >= totalDiff : balance >= totalAmount
  const isUnderPrice =
    priceChanged && price != lastBidPrice && price <= highestBidPrice
  const canNext =
    isSufficient &&
    price > 0 &&
    (price === lastBidPrice || price > highestBidPrice)

  // css
  const baseCss = clsx('h-auto')
  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const nameCss = clsx('mt-1 text-green-20 font-semibold')

  return (
    <section className={baseCss}>
      <h1 className={titleCss}>Place Bid</h1>
      <State num={1} />

      <section className={formCss}>
        <p>You're about to place the bid for</p>
        <p className={nameCss}>{board.name}</p>

        <PriceInput
          price={price}
          highestBidPrice={highestBidPrice}
          isSufficient={isSufficient}
          isUnderPrice={isUnderPrice}
          setPrice={setPrice}
          setPriceChanged={setPriceChanged}
        />
        <Balance price={price} tax={tax} totalAmount={totalAmount} />
        <Detail
          price={price}
          taxRate={taxRate}
          tax={tax}
          totalAmount={totalAmount}
        />
      </section>

      <Controls disabled={!canNext} updateSetBidStep={updateSetBidStep} />
    </section>
  )
}

export default SetPrice
