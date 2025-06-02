import clsx from 'clsx'

import RedirectLink from '@components/Bid/RedirectLink'
import UploadedImage from '@components/Bid/UploadedImage'
import ExclamationSvg from '@components/Svg/Exclamation'
import { calTax, calTotalAmount } from '@utils/num'

import Balance from '../Balance'
import Detail from '../Detail'
import State from '../State'

import Controls from './Controls'

type PropsType = {
  data: Record<string, Anything>
  price: number
  content: string
  redirect: string
  updateSetBidStep: (value: SetBidStepType) => void
}

const SetConfirm = ({
  data,
  price,
  content,
  redirect,
  updateSetBidStep,
}: PropsType) => {
  const { board, epochRange } = data

  // data
  const taxRate = Number(board?.taxRate || 0)
  const tax = Number(calTax(price, taxRate, 2))
  const totalAmount = Number(calTotalAmount(price, taxRate, 2))

  // css
  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const nameCss = clsx('text-green-20 font-semibold')
  const timeCss = clsx('mt-1 text-xs text-gray-30 font-normal')
  const imageCss = clsx('mt-8')
  const redirectCss = clsx('mt-8')
  const hintCss = clsx('mt-8 f-row-cs text-xs text-gray-50 font-normal')
  const hintIconCss = clsx('self-start text-gray-50 mr-1')
  const agreeCss = clsx('text-xs text-gray-10 max-w-form mx-auto')

  return (
    <section>
      <h1 className={titleCss}>Place Bid</h1>
      <State num={3} />

      <section className={formCss}>
        <p className={nameCss}>{board.name}</p>
        <p className={timeCss}>
          {epochRange.start} - {epochRange.end} (UTC+8)
        </p>

        {content && <UploadedImage classes={imageCss} content={content} />}
        {redirect && <RedirectLink classes={redirectCss} redirect={redirect} />}

        <Balance price={price} tax={tax} totalAmount={totalAmount} />
        <Detail
          price={price}
          taxRate={taxRate}
          tax={tax}
          totalAmount={totalAmount}
        />

        <p className={hintCss}>
          <ExclamationSvg classes={hintIconCss} />
          You'll get a full refund if you don't win this round's auction
        </p>
      </section>

      <p className={agreeCss}>
        Continued use indicates you have read the disclaimer and agree to the
        terms
      </p>

      <Controls totalAmount={totalAmount} updateSetBidStep={updateSetBidStep} />
    </section>
  )
}

export default SetConfirm
