import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import UploadedImage from '@components/Bid/UploadedImage'
import LinkSvg from '@components/Svg/Link'
import useAppEnv from '@hooks/useAppEnv'
import { formatParams } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import EmptyImage from '../../../EmptyImage'

type PropsType = {
  data: Record<string, Anything>
}

const Row = ({ data }: PropsType) => {
  const { urlOpExplorer } = useAppEnv()
  const { board, epoch, epochRange, bid, highestBid } = data

  const txUrl = `${urlOpExplorer}/tx/${bid.txHash}`
  const price = toFloatUSDT(bid?.price || 0, 3)
  const content = bid.content

  const hasContent = content && content.length > 0

  const baseCss = clsx('py-5 f-col gap-y-4 md:f-row-cb md:gap-y-0')
  const leftCss = clsx('f-col gap-y-4 md:f-row-cs md:gap-x-4')
  const imageCss = clsx('!w-[140px] !rounded')
  const emptyImageCss = clsx('w-[140px] h-[80px]')
  const infoCss = clsx('self-stretch f-col gap-y-2')
  const timeCss = clsx('text-xs text-gray-50 font-normal')
  const nameCss = clsx('font-semibold')
  const metaCss = clsx('f-row-cs gap-x-1')
  const hintCss = clsx('f-row-cs gap-x-1 text-xs text-purple-10 font-normal')
  const hintDotCss = clsx('text-xs text-gray-50')
  const hashCss = clsx(
    'f-row-cs gap-x-1 text-xs text-gray-50 hover:text-gray-10 font-normal trans-500'
  )
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
          <div className={metaCss}>
            <NavLink className={hashCss} to={txUrl} target="_blank">
              View Transaction
              <LinkSvg width={12} height={12} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className={rightCss}>
        <p>{price} USDT</p>
      </div>
    </section>
  )
}

export default Row
