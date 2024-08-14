import clsx from 'clsx'

import { formatRoundId } from '@util/format'
import { calAmount } from '@util/num'

type Props = {
  data: Record<string, any>
}

const Bid = ({ data }: Props) => {
  const { board, bid, epoch, epochRange } = data
  const amount = calAmount(Number(bid.price), Number(bid.tax), 2)

  const baseCss = 'p-5 bg-black t-14 md:t-18'
  const gridCss = 'cols-1 gap-y-2 md:cols-10 md:gap-y-0 md:gap-x-3'
  const rowCss = clsx(baseCss, gridCss, 'b-b-dashed border-beige/30')
  const cellCss = 'font-semibold f-center-start'
  const nameCss = clsx(cellCss, 'md:col-span-2')
  const timeCss = 'md:col-span-5 text-beige/60 f-center-start'
  const numCss = 'md:col-span-2 f-center-end text-grass'

  return (
    <div className={rowCss}>
      <div className={nameCss}>{board.name}</div>
      <div className={cellCss}>No. {formatRoundId(`${epoch}`)}</div>
      <div className={timeCss}>
        Auction:&nbsp;
        {epochRange.start} - {epochRange.end} (UTC+8)
      </div>
      <div className={numCss}>{amount} USDT</div>
    </div>
  )
}

export default Bid
