import { useParams } from '@remix-run/react'
import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import BidSuccessMDSvg from '@components/Svg/BidSuccessMD'
import BidSuccessSMSvg from '@components/Svg/BidSuccessSM'

type PropsType = {
  isNewBid: boolean
}

const Success = ({ isNewBid }: PropsType) => {
  const { id } = useParams()

  const titleCss = clsx('section-title')
  const descCss = clsx('mt-5 md:mt-10 md:w-1/2 mx-auto section-desc')
  const imageMDCss = clsx('my-10 w-full hidden md:block')
  const imageSMCss = clsx('my-8 mx-auto w-10/12 block md:hidden')
  const buttonCss = clsx('f-row-cc py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-fit mx-auto')

  return (
    <section>
      <h1 className={titleCss}>{isNewBid ? 'Bid Placed' : 'Bid Updated'}</h1>
      <p className={descCss}>
        Your bid history will update shortly—then you can head over to the board
        page to see all the latest bids.
      </p>
      <BidSuccessMDSvg classes={imageMDCss} />
      <BidSuccessSMSvg classes={imageSMCss} />
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="link"
        to={`/board/${id}`}
        target="_self"
      >
        Got it
      </GradButton>
    </section>
  )
}

export default Success
