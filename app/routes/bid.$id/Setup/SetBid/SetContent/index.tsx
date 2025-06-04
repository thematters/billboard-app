import clsx from 'clsx'
import isUrl from 'is-url'

import Uploader from '@components/Uploader'

import State from '../State'

import Controls from './Controls'
import RedirectInput from './RedirectInput'

type PropsType = {
  content: string
  redirect: string
  isNewBid: boolean
  setContent: (value: string) => void
  setRedirect: (value: string) => void
  updateSetBidStep: (value: SetBidStepType) => void
}

const SetContent = ({
  content,
  redirect,
  isNewBid,
  setContent,
  setRedirect,
  updateSetBidStep,
}: PropsType) => {
  // condition
  const isValidRedirect =
    redirect === '' || (isUrl(redirect) && redirect.startsWith('https://'))
  const canSave = isValidRedirect

  // css
  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const uploaderCss = clsx('mt-8')

  return (
    <section>
      <h1 className={titleCss}>{isNewBid ? 'Place Bid' : 'Update Bid'}</h1>
      <State num={2} />

      <section className={formCss}>
        <p>You can set up the AD image now or after you win the bid.</p>
        <Uploader
          classes={uploaderCss}
          content={content}
          setContent={setContent}
        />
        <RedirectInput
          redirect={redirect}
          isValidRedirect={isValidRedirect}
          setRedirect={setRedirect}
        />
      </section>

      <Controls disabled={!canSave} updateSetBidStep={updateSetBidStep} />
    </section>
  )
}

export default SetContent
