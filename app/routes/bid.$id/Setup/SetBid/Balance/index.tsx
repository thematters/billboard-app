import clsx from 'clsx'

type PropsType = {
  price: number
  tax: number
  totalAmount: number
}

const Balance = ({ price, tax, totalAmount }: PropsType) => {
  const breakCss = clsx('mt-8 mb-4 border-b border-gray-80')
  const itemsCss = clsx(
    'grid grid-cols-2 gap-y-3 [&>div:nth-child(even)]:text-right'
  )
  const totalCss = clsx('text-white font-semibold')

  return (
    <>
      <hr className={breakCss} />
      <section className={itemsCss}>
        <div>Bid Price</div>
        <div>{price.toFixed(2)} USDT</div>
        <div>Tax Fees</div>
        <div>+ {tax} USDT</div>
        <div className={totalCss}>Total Amount</div>
        <div className={totalCss}>= {totalAmount} USDT</div>
      </section>
    </>
  )
}

export default Balance
