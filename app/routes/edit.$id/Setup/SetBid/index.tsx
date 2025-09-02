import { useState } from 'react'

import SetConfirm from './SetConfirm'
import SetContent from './SetContent'

type PropsType = {
  data: Record<string, Anything>
  setStep: (value: EditStepType) => void
}

const SetBid = ({ data, setStep }: PropsType) => {
  const { bid } = data
  const [editBidStep, updateEditBidStep] =
    useState<EditBidStepType>('set-content')
  const [content, setContent] = useState(bid?.contentURI || '')
  const [redirect, setRedirect] = useState(bid?.redirectURI || '')

  return (
    <>
      {editBidStep === 'set-content' && (
        <SetContent
          bid={bid}
          content={content}
          redirect={redirect}
          setContent={setContent}
          setRedirect={setRedirect}
          updateEditBidStep={updateEditBidStep}
        />
      )}
      {editBidStep === 'set-confirm' && (
        <SetConfirm
          data={data}
          content={content}
          redirect={redirect}
          updateEditBidStep={updateEditBidStep}
          setStep={setStep}
        />
      )}
    </>
  )
}

export default SetBid
