import type { ComponentProps } from '@type'

import { formatRoundId } from '@util/format'

type Props = ComponentProps & {
  data: Record<string, any>
}

const Auction = ({ data }: Props) => {
  const { epoch, epochRange, runningEpochRange } = data

  const headCss = 't-16 sm:t-18 font-semibold'
  const auctionCss = 'mt-4 cols-1 t-14'
  const runningCss = 'mt-3 sm:mt-0 cols-1'

  return (
    <section>
      <p className={headCss}>Auction No.{formatRoundId(epoch)}</p>
      <div className={auctionCss}>
        <p className="text-beige/60">Display Time (UTC+8)</p>
        <p className="mt-1">
          {runningEpochRange.start} - {runningEpochRange.end}
        </p>
      </div>
    </section>
  )
}

export default Auction
