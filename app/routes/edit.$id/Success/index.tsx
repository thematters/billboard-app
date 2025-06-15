import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import EditSuccessSvg from '@components/Svg/EditSuccess'
import useQueryParams from '@hooks/useQueryParams'

const Success = () => {
  const { id, from } = useQueryParams()

  const isFromMyBids = from === 'accepted' || from === 'bidding'
  const redirectUrl = isFromMyBids ? `/mybids?tab=${from}` : `/board/${id}`

  const titleCss = clsx('section-title')
  const descCss = clsx('mt-5 md:mt-10 md:w-1/2 mx-auto section-desc')
  const imageCss = clsx('my-8 w-10/12 mx-auto md:my-10 md:w-full')
  const buttonCss = clsx('f-row-cc py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-fit mx-auto')

  return (
    <section>
      <h1 className={titleCss}>Bid edited</h1>
      <p className={descCss}>
        The content will be updated shortly—then you can head over to the board
        page to review it.
      </p>
      <EditSuccessSvg classes={imageCss} />
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="link"
        to={redirectUrl}
        target="_self"
      >
        Beck to Bids
      </GradButton>
    </section>
  )
}

export default Success
