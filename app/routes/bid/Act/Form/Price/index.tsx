import type { ComponentProps } from '@type'
import type { UseBalanceReturnType } from 'wagmi'

import { useSearchParams } from '@remix-run/react'
import clsx from 'clsx'

import { calTotalAmount, toFloatUSDT, toPercentTaxRate } from '@util/num'

type Props = ComponentProps & {
  data: Record<string, any>
  balance: UseBalanceReturnType['data']
  price: number
  setPrice: (value: number) => void
  isLocked: boolean
}

const Price = ({ css, data, balance, price, setPrice, isLocked }: Props) => {
  const [searchParams] = useSearchParams()
  const { board, bid, highestBid } = data

  const taxRate = Number(board?.taxRate || 0)
  const totalAmount = calTotalAmount(price, taxRate)
  const highestPrice = Number(toFloatUSDT(Number(highestBid?.price || 0)))

  const isInsufficient = balance && Number(balance.formatted) < price
  const hasHint = isInsufficient

  const onChange = (event: any) => {
    setPrice(parseInt(event.target.valueAsNumber || 0, 10))
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
  const highestCss = 'mt-2 font-12 text-beige/60'
  const hintCss = 'mt-2 font-12 text-red text-right'
  const taxCss = clsx('cols-2 t-14', {
    'mt-2': isLocked,
    'mt-5': !isLocked,
  })
  const taxNumCss = 'text-beige/60 text-right'
  const amountCss = 'mt-2 cols-2 t-14'
  const calInlineCss = 'hidden sm:inline-block'
  const calBlockCss = 'col-span-2 sm:hidden'

  return (
    <section>
      <p className={headCss}>Setup Bid Price</p>
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
                The current highest bid is {highestPrice} USDT
              </p>
            )}
            {hasHint && isInsufficient && (
              <p className={hintCss}>Your USDT balance is not enough</p>
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
    </section>
  )
}

export default Price
