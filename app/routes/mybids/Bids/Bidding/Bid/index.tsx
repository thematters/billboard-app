import { useNavigate } from '@remix-run/react'
import clsx from 'clsx'

import SvgChevron from '@svg/Chevron'
import { formatRoundId } from '@util/format'

type Props = {
  data: Record<string, any>
}

const Bid = ({ data }: Props) => {
  const navigate = useNavigate()
  const { board, bid, epoch, epochRange } = data

  const onUpdate = () => {
    const { id } = board
    const params = new URLSearchParams({ id, epoch, from: 'mybids' }).toString()
    navigate(`/bid?${params}`)
  }

  const baseCss = 'p-5 bg-black t-14 md:t-18'
  const gridCss = 'cols-1 gap-y-2 md:cols-10 md:gap-y-0 md:gap-x-3'
  const rowCss = clsx(baseCss, gridCss, 'b-b-dashed border-beige/30')
  const cellCss = 'font-semibold f-center-start'
  const nameCss = clsx(cellCss, 'md:col-span-2')
  const timeCss = 'md:col-span-6 text-beige/60 f-center-start'
  const actionCss = 'f-center-start md:f-center-end'
  const updateCss = 'w-fit text-grass f-center-end cursor-pointer'

  return (
    <div className={rowCss}>
      <div className={nameCss}>{board.name}</div>
      <div className={cellCss}>No. {formatRoundId(`${epoch}`)}</div>
      <div className={timeCss}>
        Auction:&nbsp;
        {epochRange.start} - {epochRange.end} (UTC+8)
      </div>
      <div className={actionCss}>
        <div className={updateCss} onClick={onUpdate}>
          Update
          <SvgChevron css="ml-1" width={18} height={18} />
        </div>
      </div>
    </div>
  )
}

export default Bid
