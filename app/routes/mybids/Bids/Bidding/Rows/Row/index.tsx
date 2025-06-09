import clsx from 'clsx'

import UploadedImage from '@components/Bid/UploadedImage'
import MonoButton from '@components/Button/Mono'
import WarnSvg from '@components/Svg/Warn'
import { formatParams } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import EmptyImage from '../../../EmptyImage'

type PropsType = {
  data: Record<string, Anything>
}

const Row = ({ data }: PropsType) => {
  const { board, epoch, epochRange, bid, highestBid } = data

  const bidParams = formatParams({ epoch, from: 'bidding' })
  const bidUrl = `/bid/${board.id}?${bidParams}`
  const price = toFloatUSDT(bid?.price || 0, 3)
  const content = bid.contentURI

  // condition
  const hasContent = content && content.length > 0
  const isOutbid = Number(highestBid.price || 0) > Number(bid?.price || 0)

  const baseCss = clsx('py-5 f-col gap-y-4 md:f-row-cb md:gap-y-0')
  const leftCss = clsx('f-col gap-y-4 md:f-row-cs md:gap-x-4')
  const imageCss = clsx('!w-[140px] !rounded')
  const emptyImageCss = clsx('w-[140px] h-[80px]')
  const infoCss = clsx('self-stretch f-col gap-y-2')
  const timeCss = clsx('text-xs text-gray-50 font-normal')
  const nameCss = clsx('font-semibold')
  const hintCss = clsx('f-row-cs gap-x-1 text-xs text-purple-10 font-normal')
  const rightCss = clsx('f-row-cb md:f-col-sb md:self-stretch')
  const buttonDotCss = clsx('f-row-ce', { 'button-dot': isOutbid })
  const updateButtonCss = clsx('block py-1 px-4 text-sm')

  return (
    <section className={baseCss}>
      <div className={leftCss}>
        {hasContent ? (
          <UploadedImage classes={imageCss} content={content} />
        ) : (
          <EmptyImage classes={emptyImageCss} />
        )}
        <div className={infoCss}>
          <p className={timeCss}>
            {epochRange.start} - {epochRange.end} (UTC+8)
          </p>
          <p className={nameCss}>{board.name}</p>
          {isOutbid && (
            <div className={hintCss}>
              <WarnSvg />
              You've been outbid
            </div>
          )}
        </div>
      </div>

      <div className={rightCss}>
        <p>{price} USDT</p>
        <div className={buttonDotCss}>
          <MonoButton
            classes={updateButtonCss}
            color="gray"
            type="link"
            to={bidUrl}
            target="_self"
          >
            Update
          </MonoButton>
        </div>
      </div>
    </section>
  )
}

export default Row
