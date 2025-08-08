import { useState } from 'react'

import { toFloatUSDTAsNumber } from '@utils/num'

import SetConfirm from './SetConfirm'
import SetContent from './SetContent'
import SetPrice from './SetPrice'

type PropsType = {
  data: Record<string, Anything>
  setStep: (value: BidStepType) => void
}

const SetBid = ({ data, setStep }: PropsType) => {
  // context
  const { prevBid } = data
  const [setBidStep, updateSetBidStep] = useState<SetBidStepType>('set-price')
  const [priceChanged, setPriceChanged] = useState<boolean>(false)
  const [price, setPrice] = useState<number>(
    toFloatUSDTAsNumber(prevBid?.price || 0)
  )
  const [content, setContent] = useState(prevBid?.contentURI || '')
  const [redirect, setRedirect] = useState(prevBid?.redirectURI || '')

  // condition
  const isNewBid = Number(prevBid?.placedAt || 0) === 0

  return (
    <>
      {setBidStep === 'set-price' && (
        <SetPrice
          data={data}
          price={price}
          priceChanged={priceChanged}
          isNewBid={isNewBid}
          setPrice={setPrice}
          setPriceChanged={setPriceChanged}
          updateSetBidStep={updateSetBidStep}
        />
      )}
      {setBidStep === 'set-content' && (
        <SetContent
          content={content}
          redirect={redirect}
          isNewBid={isNewBid}
          setContent={setContent}
          setRedirect={setRedirect}
          updateSetBidStep={updateSetBidStep}
        />
      )}
      {setBidStep === 'set-confirm' && (
        <SetConfirm
          data={data}
          price={price}
          content={content}
          redirect={redirect}
          isNewBid={isNewBid}
          updateSetBidStep={updateSetBidStep}
          setStep={setStep}
        />
      )}
    </>
  )
}

export default SetBid
