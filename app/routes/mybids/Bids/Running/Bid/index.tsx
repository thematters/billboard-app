import { useNavigate } from '@remix-run/react'
import clsx from 'clsx'

import SvgChevron from '@svg/Chevron'
import SvgEye from '@svg/Eye'
import SvgEyeCross from '@svg/EyeCross'
import { formatRoundId } from '@util/format'

type Props = {
  state: string
  data: Record<string, any>
}

const Bid = ({ state, data }: Props) => {
  const navigate = useNavigate()
  const { board, bid, epoch, displayRange } = data
  const isRunning = state === 'running'
  const isUpcoming = state === 'upcoming'

  const onEdit = () => {
    const { id } = board
    const params = new URLSearchParams({
      id,
      epoch,
      from: 'mybids',
    }).toString()
    navigate(`/edit?${params}`)
  }

  const baseCss = 'p-5 bg-black t-14 md:t-18'
  const gridCss = 'cols-1 gap-y-2 md:cols-8 md:gap-y-0 md:gap-x-3'
  const rowCss = clsx(baseCss, gridCss, 'b-b-dashed border-beige/30')
  const labelCss =
    'py-1 px-2 w-fit md:w-full f-center-start rounded-lg t-16 text-black'
  const runningCss = clsx(labelCss, 'bg-[#91d7ff]')
  const upcomingCss = clsx(labelCss, 'bg-[#fffc62]')
  const cellCss = 'font-semibold f-center-start'
  const timeCss = 'md:col-span-4 text-beige/60 f-center-start'
  const actionCss = 'f-center-start md:f-center-end'
  const editCss = 'w-fit text-grass f-center-end cursor-pointer'

  return (
    <section className={rowCss}>
      <div className="f-center-start">
        {isRunning && (
          <div className={runningCss}>
            <SvgEye css="mr-1" />
            Running
          </div>
        )}
        {isUpcoming && (
          <div className={upcomingCss}>
            <SvgEyeCross css="mr-1" />
            Upcoming
          </div>
        )}
      </div>
      <div className={cellCss}>{board.name}</div>
      <div className={cellCss}>No. {formatRoundId(`${epoch}`)}</div>
      <div className={timeCss}>
        Display:&nbsp;
        {displayRange.start} - {displayRange.end} (UTC+8)
      </div>
      <div className={actionCss}>
        <div className={editCss} onClick={onEdit}>
          Edit
          <SvgChevron css="ml-1" width={18} height={18} />
        </div>
      </div>
    </section>
  )
}

export default Bid
