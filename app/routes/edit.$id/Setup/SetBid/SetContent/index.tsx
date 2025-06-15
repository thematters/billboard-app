import clsx from 'clsx'
import isUrl from 'is-url'

import Uploader from '@components/Uploader'

import State from '../State'

import Controls from './Controls'
import RedirectInput from './RedirectInput'

type PropsType = {
  bid: Record<string, Anything>
  content: string
  redirect: string
  setContent: (value: string) => void
  setRedirect: (value: string) => void
  updateEditBidStep: (value: EditBidStepType) => void
}

const SetContent = ({
  bid,
  content,
  redirect,
  setContent,
  setRedirect,
  updateEditBidStep,
}: PropsType) => {
  const isValidRedirect =
    redirect === '' || (isUrl(redirect) && redirect.startsWith('https://'))
  const isContentChanged =
    content != bid.contentURI || redirect != bid.redirectURI
  const canNext = isValidRedirect && isContentChanged

  const titleCss = clsx('section-title')
  const formCss = clsx('mt-5 md:mt-10 mb-8 form')
  const uploaderCss = clsx('mt-8')

  return (
    <section>
      <h1 className={titleCss}>Edit Bid</h1>
      <State num={1} />

      <section className={formCss}>
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

      <Controls disabled={!canNext} updateEditBidStep={updateEditBidStep} />
    </section>
  )
}

export default SetContent
