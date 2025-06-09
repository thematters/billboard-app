import clsx from 'clsx'

import UploadedImage from '@components/Bid/UploadedImage'
import MonoButton from '@components/Button/Mono'
import { formatParams } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import EmptyImage from '../../../EmptyImage'

type PropsType = {
  data: Record<string, Anything>
}

const Row = () => {
  const { board, epoch, epochRange, bid, highestBid } = data

  const bidParams = formatParams({ epoch, from: 'accepted' })
  const bidUrl = `/bid/${board.id}?${bidParams}`
  const price = toFloatUSDT(bid?.price || 0, 3)
  const content = bid.contentURI

  const hasContent = content && content.length > 0

  const baseCss = clsx('py-5 f-col gap-y-4 md:f-row-cb md:gap-y-0')
  const leftCss = clsx('f-col gap-y-4 md:f-row-cs md:gap-x-4')
  const imageCss = clsx('!w-[140px] !rounded')
  const emptyImageCss = clsx('w-[140px] h-[80px]')
  const infoCss = clsx('self-stretch f-col gap-y-2')
  const timeCss = clsx('text-xs text-gray-50 font-normal')
  const nameCss = clsx('font-semibold')
  const rightCss = clsx('f-row-cb md:f-col-sb md:self-stretch')

  return (
    <section className={baseCss}>
      <div className={leftCss}>

      </div>
      <div className={rightCss}></div>
    </section>
  )
}

export default Row
