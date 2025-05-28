import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import ApplySvg from '@components/Svg/Apply'
import { FORM_LINK } from '@constants'

import Base from '../Base'

const WhitelistModal = () => {
  const contentCss = clsx('py-8 font-normal text-gray-30')
  const buttonCss = clsx('f-row-cc gap-x-1 w-full py-3')
  const buttonOuterCss = clsx('w-full')

  return (
    <Base id="whitelist" title="Apply for whitelist">
      <p className={contentCss}>
        The Billboard auction is currently whitelisted. If you have not yet
        applied, click "Go Apply" to submit your application.
      </p>

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
    </Base>
  )
}

export default WhitelistModal
