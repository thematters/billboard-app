import { useParams } from '@remix-run/react'
import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import ApplySvg from '@components/Svg/Apply'
import BidConnectMDSvg from '@components/Svg/BidConnectMD'
import BidConnectSMSvg from '@components/Svg/BidConnectSM'
import { FORM_LINK } from '@constants'

const Unauthed = () => {
  const { id } = useParams()

  const titleCss = clsx('section-title')
  const descCss = clsx('mt-5 md:mt-10 md:w-1/2 mx-auto section-desc')
  const imageMDCss = clsx('my-10 w-full hidden md:block')
  const imageSMCss = clsx('my-8 mx-auto w-10/12 block md:hidden')
  const buttonsCss = clsx('f-colr gap-y-4 md:f-row-cc md:gap-x-6 md:gap-y-0')
  const buttonCss = clsx(
    'f-row-cc gap-x-1 py-3 w-full md:w-[280px] font-semibold'
  )
  const buttonOuterCss = clsx('w-full md:w-fit mx-0')

  return (
    <section>
      <h1 className={titleCss}>Apply for Whitelist</h1>
      <p className={descCss}>
        The Billboard auction is currently whitelisted. If you have not yet
        applied, click "Go Apply" to submit your application.
      </p>
      <BidConnectMDSvg classes={imageMDCss} />
      <BidConnectSMSvg classes={imageSMCss} />
      <div className={buttonsCss}>
        <GradButton
          classes={buttonCss}
          outerClasses={buttonOuterCss}
          color="dim-green"
          type="link"
          shape="general"
          to={`/board/${id}`}
          target="_self"
        >
          Back to Board
        </GradButton>
        <GradButton
          classes={buttonCss}
          outerClasses={buttonOuterCss}
          color="green"
          type="link"
          shape="general"
          to={FORM_LINK}
        >
          <ApplySvg />
          Go Apply
        </GradButton>
      </div>
    </section>
  )
}

export default Unauthed
