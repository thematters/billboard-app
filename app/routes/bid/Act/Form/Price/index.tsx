import type { ComponentProps } from '@type'
import type { UseBalanceReturnType } from 'wagmi'

import { useSearchParams } from '@remix-run/react'
import clsx from 'clsx'
import { useState } from 'react'

import {
  calTotalAmount,
  calTotalDiff,
  toFloatUSDT,
  toPercentTaxRate,
} from '@util/num'

type Props = ComponentProps & {
  data: Record<string, any>
  balance: UseBalanceReturnType['data']
  price: number
  setPrice: (value: number) => void
  hasBid: boolean
  isLocked: boolean
}

const Price = ({ data, balance, price, setPrice, hasBid, isLocked }: Props) => {
  const [searchParams] = useSearchParams()
  const [changed, setChanged] = useState(false)
  const { board, bid, highestBid } = data

  const taxRate = Number(board?.taxRate || 0)
  const lastBidPrice = Number(toFloatUSDT(Number(bid?.price || 0)))
  const totalAmount = calTotalAmount(price, taxRate)
  const totalDiff = calTotalDiff(price, lastBidPrice, taxRate)
  const highestPrice = Number(toFloatUSDT(Number(highestBid?.price || 0)))

  const hasLastBid = lastBidPrice > 0
  const isInsufficient =
    balance &&
    ((!hasLastBid && Number(balance.formatted) < Number(totalAmount)) ||
      (hasLastBid && Number(balance.formatted) < Number(totalDiff)))
  const isUnderPrice = changed && price != lastBidPrice && price <= highestPrice
  const hasHint = isInsufficient || isUnderPrice

  const onChange = (event: any) => {
    setPrice(parseInt(event.target.valueAsNumber || 0, 10))

    if (!changed) {
      setChanged(true)
    }
  }
  const onWheel = (event: any) => {
    event.target.blur()
  }

  const headCss = 't-16 sm:t-18 font-semibold'
  const bidCss = clsx('t-14 mt-4', {
    'cols-2 text-beige/60': isLocked,
    'cols-1': !isLocked,
  })
  const priceCss = clsx('input-number mt-2', {
    'border border-red': hasHint,
  })
  const highestCss = 'mt-2 t-12 text-beige/60'
  const hintCss = 'mt-2 t-12 text-red text-right'
  const taxCss = clsx('cols-2 t-14', {
    'mt-2': isLocked,
    'mt-5': !isLocked,
  })
  const taxNumCss = 'text-beige/60 text-right'
  const amountCss = clsx('cols-2 t-14 mt-2', {
    'text-beige/60': hasBid,
  })
  const calInlineCss = 'hidden sm:inline-block'
  const calBlockCss = 'col-span-2 sm:hidden'
  const diffCss = 'mt-2 cols-2 t-14'

  return (
    <section>
      <p className={headCss}>{hasBid ? 'Update' : 'Setup'} Bid Price</p>
      <div className={bidCss}>
        <p>Bid Price</p>
        {isLocked && <p className="text-right">{price} USDT</p>}
        {!isLocked && (
          <>
            <input
              type="number"
              className={priceCss}
              value={price.toString()}
              onChange={onChange}
              onWheel={onWheel}
              placeholder="Enter your bid"
              autoComplete="nope"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            {highestPrice > 0 && !hasHint && (
              <p className={highestCss}>
                The current highest bid is{' '}
                <span className="text-beige">{highestPrice}</span> USDT
              </p>
            )}
            {hasHint && (
              <>
                {isInsufficient && (
                  <p className={hintCss}>Your USDT balance is not enough</p>
                )}
                {isUnderPrice && (
                  <p className={hintCss}>
                    Your new bid price should be higher than {highestPrice} USDT
                  </p>
                )}
              </>
            )}
          </>
        )}
      </div>
      <div className={taxCss}>
        <p className="text-beige/60">Tax Rate Per Day</p>
        <p className={taxNumCss}>{toPercentTaxRate(taxRate)}%</p>
      </div>
      <div className={amountCss}>
        <p>
          Total&nbsp;
          <span className={calInlineCss}>
            ({price} + {price} x 14 x {toPercentTaxRate(taxRate)}%)
          </span>
        </p>
        <p className="text-right">{totalAmount} USDT</p>
        <p className={calBlockCss}>
          ({price} + {price} x 14 x {toPercentTaxRate(taxRate)}%)
        </p>
      </div>
      {hasBid && (
        <div className={diffCss}>
          <p>Price difference to cover</p>
          <p className="text-right">{totalDiff} USDT</p>
        </div>
      )}
    </section>
  )
}

export default Price
