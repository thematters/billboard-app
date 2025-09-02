import clsx from 'clsx'

type PropsType = {
  prevBidTotalAmount: number
  price: number
  tax: number
  totalAmount: number
  totalDiff: number
}

const Balance = ({
  prevBidTotalAmount,
  price,
  tax,
  totalAmount,
  totalDiff,
}: PropsType) => {
  const hasPrevBid = prevBidTotalAmount > 0

  const breakCss = clsx('mt-8 mb-4 border-b border-gray-80')
  const itemsCss = clsx(
    'grid grid-cols-2 gap-y-3 [&>div:nth-child(even)]:text-right'
  )
  const totalCss = clsx('text-white font-semibold')

  return (
    <>
      <hr className={breakCss} />
      {hasPrevBid && (
        <section className={itemsCss}>
          <div>New Bid Price</div>
          <div>{price.toFixed(3)} USDT</div>
          <div>Tax Fees</div>
          <div>+ {tax} USDT</div>
          <div>Previous Bid Price</div>
          <div>- {prevBidTotalAmount} USDT</div>
          <div className={totalCss}>Pay the difference</div>
          <div>= {totalDiff} USDT</div>
        </section>
      )}
      {!hasPrevBid && (
        <section className={itemsCss}>
          <div>Bid Price</div>
          <div>{price.toFixed(3)} USDT</div>
          <div>Tax Fees</div>
          <div>+ {tax} USDT</div>
          <div className={totalCss}>Total Amount</div>
          <div className={totalCss}>= {totalAmount} USDT</div>
        </section>
      )}
    </>
  )
}

export default Balance
