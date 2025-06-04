import clsx from 'clsx'

import GradButton from '@components/Button/Grad'

type PropsType = {
  disabled: boolean
  updateSetBidStep: (value: SetBidStepType) => void
}

const Controls = ({ disabled, updateSetBidStep }: PropsType) => {
  const back = () => updateSetBidStep('set-price')
  const next = () => updateSetBidStep('set-confirm')

  const baseCss = clsx(
    'f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 w-full')
  const buttonOuterCss = clsx('w-full')

  return (
    <section className={baseCss}>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        onClick={back}
      >
        Back
      </GradButton>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="green"
        type="button"
        disabled={disabled}
        onClick={next}
      >
        Next
      </GradButton>
    </section>
  )
}

export default Controls
