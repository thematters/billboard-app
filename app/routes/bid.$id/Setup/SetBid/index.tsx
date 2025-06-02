import { useState } from 'react'

import { toFloatUSDT } from '@utils/num'

import SetConfirm from './SetConfirm'
import SetContent from './SetContent'
import SetPrice from './SetPrice'

type PropsType = {
  data: Record<string, Anything>
}

const SetBid = ({ data }: PropsType) => {
  const { bid } = data

  const [setBidStep, updateSetBidStep] = useState<SetBidStepType>('set-price')
  const [priceChanged, setPriceChanged] = useState<boolean>(false)

  const [price, setPrice] = useState<number>(
    Number(toFloatUSDT(Number(bid?.price || 0)))
  )
  const [content, setContent] = useState(bid?.contentURI || '')
  const [redirect, setRedirect] = useState(bid?.redirectURI || '')

  return (
    <>
      {setBidStep === 'set-price' && (
        <SetPrice
          data={data}
          price={price}
          priceChanged={priceChanged}
          setPrice={setPrice}
          setPriceChanged={setPriceChanged}
          updateSetBidStep={updateSetBidStep}
        />
      )}
      {setBidStep === 'set-image' && (
        <SetContent
          content={content}
          redirect={redirect}
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
          updateSetBidStep={updateSetBidStep}
        />
      )}
    </>
  )
}

export default SetBid
