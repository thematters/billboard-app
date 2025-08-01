import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import UploadedImage from '@components/Bid/UploadedImage'
import MonoButton from '@components/Button/Mono'
import EyeSvg from '@components/Svg/Eye'
import EyeCrossSvg from '@components/Svg/EyeCross'
import LinkSvg from '@components/Svg/Link'
import useAppEnv from '@hooks/useAppEnv'
import { formatParams } from '@utils/format'
import { toFloatUSDT } from '@utils/num'

import EmptyImage from '../../../EmptyImage'

type PropsType = {
  data: Record<string, Anything>
  isRunning: boolean
}

const Row = ({ data, isRunning }: PropsType) => {
  const { urlOpExplorer } = useAppEnv()
  const { board, epoch, displayRange, bid } = data

  const bidParams = formatParams({ epoch, from: 'accepted' })
  const editUrl = `/edit/${board.id}?${bidParams}`
  const txUrl = `${urlOpExplorer}/tx/${bid.txHash}`
  const price = toFloatUSDT(bid?.price || 0, 3)
  const content = bid.contentURI

  // condition
  const hasContent = content && content.length > 0

  const baseCss = clsx('py-5 f-col gap-y-4 md:f-row-cb md:gap-y-0')
  const leftCss = clsx('f-col gap-y-4 md:f-row-cs md:gap-x-4')
  const imageCss = clsx('!w-[140px] !rounded')
  const emptyImageCss = clsx('w-[140px] h-[80px]')
  const infoCss = clsx('self-stretch f-col gap-y-2')
  const timeCss = clsx('text-xs text-gray-50 font-normal')
  const nameCss = clsx('font-semibold')
  const metaCss = clsx('f-row-cs gap-x-1')
  const hintCss = clsx(
    'f-row-cs gap-x-1 text-xs text-gray-50 font-normal trans-500'
  )
  const hintDotCss = clsx('text-xs text-gray-50')
  const hashCss = clsx(
    'f-row-cs gap-x-1 text-xs text-gray-50 hover:text-gray-10 font-normal trans-500'
  )
  const rightCss = clsx('f-row-cb md:f-col-sb md:self-stretch')
  const buttonDotCss = clsx('f-row-ce', {
    'button-dot': isRunning && !hasContent,
  })
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
            {displayRange.start} - {displayRange.end} (UTC+8)
          </p>
          <p className={nameCss}>{board.name}</p>
          <div className={metaCss}>
            {isRunning ? (
              <div className={hintCss}>
                <EyeSvg width={12} height={12} />
                On Running
              </div>
            ) : (
              <div className={hintCss}>
                <EyeCrossSvg width={12} height={12} />
                On Preparing
              </div>
            )}
            <p className={hintDotCss}>·</p>
            <NavLink className={hashCss} to={txUrl} target="_blank">
              View Transaction
              <LinkSvg width={12} height={12} />
            </NavLink>
          </div>
        </div>
      </div>
      <div className={rightCss}>
        <p>{price} USDT</p>
        <div className={buttonDotCss}>
          <MonoButton
            classes={updateButtonCss}
            color="gray"
            type="link"
            to={editUrl}
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
