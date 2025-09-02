import clsx from 'clsx'

type PropsType = {
  price: number
  highestBidPrice: number
  isSufficient: boolean
  isUnderPrice: boolean
  setPrice: (value: number) => void
  setPriceChanged: (value: boolean) => void
}

const PriceInput = ({
  price,
  highestBidPrice,
  isSufficient,
  isUnderPrice,
  setPrice,
  setPriceChanged,
}: PropsType) => {
  const hasError = !isSufficient || isUnderPrice

  const onChange = (event: Anything) => {
    setPrice(parseInt(event.target.valueAsNumber || 0, 10))
    setPriceChanged(true)
  }

  const onWheel = (event: Anything) => {
    event.target.blur()
  }

  const priceCss = clsx('mt-8 text-white font-semibold')
  const inputBoxCss = clsx('input-number-box mt-2 w-full')
  const inputCss = clsx('input-number w-full', { error: hasError })
  const hintCss = clsx('mt-2 text-xs text-gray-50 font-normal')
  const errorCss = clsx('mt-2 text-xs text-red-10 font-normal')

  return (
    <>
      <p className={priceCss}>Bid Price</p>
      <div className={inputBoxCss}>
        <input
          type="number"
          className={inputCss}
          placeholder="Enter bid price"
          value={price.toString()}
          onChange={onChange}
          onWheel={onWheel}
          autoComplete="nope"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
        />
      </div>
      {!hasError && (
        <p className={hintCss}>The highest bid was {highestBidPrice} USDT</p>
      )}
      {hasError && (
        <>
          {!isSufficient && (
            <p className={errorCss}>Your USDT balance is insufficient</p>
          )}
          {isUnderPrice && (
            <p className={errorCss}>
              Your new bid must be higher than {highestBidPrice} USDT
            </p>
          )}
        </>
      )}
    </>
  )
}

export default PriceInput
