import clsx from 'clsx'

import RedirectLink from '@components/Bid/RedirectLink'
import UploadedImage from '@components/Bid/UploadedImage'

import State from '../State'

import Controls from './Controls'

type PropsType = {
  data: Record<string, Anything>
  content: string
  redirect: string
  updateEditBidStep: (value: EditBidStepType) => void
  setStep: (value: EditStepType) => void
}

const SetConfirm = ({
  data,
  content,
  redirect,
  updateEditBidStep,
  setStep,
}: PropsType) => {
  const { board, displayEpochRange, bid } = data

  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const nameCss = clsx('text-green-20 font-semibold')
  const timeCss = clsx('mt-1 text-xs text-gray-30 font-normal')
  const imageCss = clsx('mt-8')
  const redirectCss = clsx('mt-8')
  const agreeCss = clsx('text-xs text-gray-10 max-w-form mx-auto')

  return (
    <section>
      <h1 className={titleCss}>Edit Bid</h1>
      <State num={2} />

      <section className={formCss}>
        <p className={nameCss}>{board.name}</p>
        <p className={timeCss}>
          {displayEpochRange.start} - {displayEpochRange.end} (UTC+8)
        </p>

        {content && <UploadedImage classes={imageCss} content={content} />}
        {redirect && <RedirectLink classes={redirectCss} redirect={redirect} />}
      </section>

      <p className={agreeCss}>
        Continued use indicates you have read the disclaimer and agree to the
        terms
      </p>

      <Controls
        bid={bid}
        content={content}
        redirect={redirect}
        updateEditBidStep={updateEditBidStep}
        setStep={setStep}
      />
    </section>
  )
}

export default SetConfirm
