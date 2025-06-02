import clsx from 'clsx'

import GradButton from '@components/Button/Grad'

type PropsType = {
  disabled: boolean
  setContent: (value: string) => void
  setRedirect: (value: string) => void
  updateSetBidStep: (value: SetBidStepType) => void
}

const Controls = ({
  disabled,
  setContent,
  setRedirect,
  updateSetBidStep,
}: PropsType) => {
  const skip = () => {
    // skip and reset
    setContent('')
    setRedirect('')
    updateSetBidStep('set-confirm')
  }
  const save = () => updateSetBidStep('set-confirm')

  const baseCss = clsx(
    'f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 w-full font-smeibold')
  const buttonOuterCss = clsx('w-full')
  const saveButtonOuterCss = clsx(buttonOuterCss, { disabled })

  return (
    <section className={baseCss}>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        onClick={skip}
      >
        Skip
      </GradButton>
      <GradButton
        classes={buttonCss}
        outerClasses={saveButtonOuterCss}
        color="green"
        type="button"
        onClick={save}
        disabled={disabled}
      >
        Save
      </GradButton>
    </section>
  )
}

export default Controls
