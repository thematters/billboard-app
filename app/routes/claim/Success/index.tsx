import clsx from 'clsx'
import { useAccount } from 'wagmi'

import GradButton from '@components/Button/Grad'
import ClaimSuccessSvg from '@components/Svg/ClaimSuccess'
import { formatAddress } from '@utils/format'

type PropsType = {
  setStep: (value: ClaimRewardStepType) => void
}

const Success = ({ setStep }: PropsType) => {
  const { address } = useAccount()

  const back = () => setStep('records')

  const titleCss = clsx('section-title')
  const descCss = clsx('mt-5 md:mt-10 md:w-1/2 mx-auto section-desc')
  const addressCss = clsx('text-green-10')
  const imageCss = clsx('my-8 w-10/12 mx-auto md:my-10 md:w-full')
  const buttonCss = clsx('f-row-cc py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-fit mx-auto')

  return (
    <section>
      <h1 className={titleCss}>Reward claimed</h1>
      <p className={descCss}>
        Your reward is on its way—you can check your wallet{' '}
        <span className={addressCss}>{formatAddress(address)}</span> to confirm.
      </p>
      <ClaimSuccessSvg classes={imageCss} />
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        onClick={back}
      >
        Back to Rewards
      </GradButton>
    </section>
  )
}

export default Success
