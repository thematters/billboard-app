import clsx from 'clsx'

type PropsType = {
  data: Record<string, Anything>
}

const Row = ({ data }: PropsType) => {
  const price = data.amount

  const baseCss = clsx('py-5 f-row-cb gap-y-4 gap-x-4 md:f-row-cb md:gap-y-0')
  const leftCss = clsx('basis-7/12 md:basis-auto f-col gap-y-4')
  const metaCss = clsx('f-row-cs gap-x-1 text-xs text-gray-50 font-normal')
  const numCss = clsx('shrink-0 text-green-10')
  const dotCss = clsx('shrink-0')
  const timeCss = clsx('line-clamp-1')
  const titleCss = clsx('text-base text-white font-normal line-clamp-1')
  const rightCss = clsx(
    'basis-5/12 md:basis-auto text-base text-gray-50 text-right font-normal self-end md:self-center'
  )

  return (
    <section className={baseCss}>
      <div className={leftCss}>
        <div className={metaCss}>
          <span className={numCss}>No. {data.roundId}</span>
          <span className={dotCss}>·</span>
          <span className={timeCss}>
            {data.from} - {data.to} (UTC+8)
          </span>
        </div>
        <div className={titleCss}>{data.title}</div>
      </div>
      <div className={rightCss}>{price} USDT</div>
    </section>
  )
}

export default Row
