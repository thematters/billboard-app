import clsx from 'clsx'
import { useAccount, useBalance } from 'wagmi'

import useAppEnv from '@hooks/useAppEnv'
import {
  calTaxAsNumber,
  calTotalAmountAsNumber,
  calTotalDiff,
  toFloatUSDTAsNumber,
} from '@utils/num'

import Balance from '../Balance'
import Detail from '../Detail'
import State from '../State'

import Controls from './Controls'
import PriceInput from './PriceInput'

type PropsType = {
  data: Record<string, Anything>
  price: number
  priceChanged: boolean
  isNewBid: boolean
  setPrice: (value: number) => void
  setPriceChanged: (value: boolean) => void
  updateSetBidStep: (value: SetBidStepType) => void
}

const SetPrice = ({
  data,
  price,
  priceChanged,
  isNewBid,
  setPrice,
  setPriceChanged,
  updateSetBidStep,
}: PropsType) => {
  // context
  const { board, highestBid, prevBid } = data
  const { addressUSDT: token } = useAppEnv()
  const { address } = useAccount()
  const { data: balanceData } = useBalance({ address, token })

  // data
  const balance = Number(balanceData?.formatted || 0)
  const taxRate = Number(board?.taxRate || 0)
  const tax = calTaxAsNumber(price, taxRate, 3)
  const prevBidPrice = toFloatUSDTAsNumber(prevBid?.price || 0)
  const prevBidTotalAmount = calTotalAmountAsNumber(prevBidPrice, taxRate, 3)
  const highestBidPrice = toFloatUSDTAsNumber(highestBid?.price || 0)
  const totalAmount = calTotalAmountAsNumber(price, taxRate, 3)
  const totalDiff = Number(calTotalDiff(price, prevBidPrice, taxRate))

  // condition
  const isSufficient = isNewBid ? balance >= totalAmount : balance >= totalDiff
  const isUnderPrice =
    priceChanged && price != prevBidPrice && price <= highestBidPrice
  const canNext =
    isSufficient &&
    price > 0 &&
    (price === prevBidPrice || price > highestBidPrice)

  // css
  const baseCss = clsx('h-auto')
  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const nameCss = clsx('mt-1 text-green-20 font-semibold')

  return (
    <section className={baseCss}>
      <h1 className={titleCss}>{isNewBid ? 'Place Bid' : 'Update Bid'}</h1>
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
        <Balance
          prevBidTotalAmount={prevBidTotalAmount}
          price={price}
          tax={tax}
          totalAmount={totalAmount}
          totalDiff={totalDiff}
        />
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
