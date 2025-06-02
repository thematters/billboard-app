import { useNavigate } from '@remix-run/react'
import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import useQueryParams from '@hooks/useQueryParams'

type PropsType = {
  disabled: boolean
  updateSetBidStep: (value: SetBidStepType) => void
}

const Controls = ({ disabled, updateSetBidStep }: PropsType) => {
  const navigate = useNavigate()
  const { id, from } = useQueryParams()

  const back = () => {
    if (!from || from === 'board') {
      navigate(`/board/${id}`)
    }
  }

  const baseCss = clsx(
    'f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 w-full font-semibold')
  const buttonOuterCss = clsx('w-full')
  const nextButtonOuterCss = clsx(buttonOuterCss, { disabled })

  return (
    <section className={baseCss}>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        onClick={back}
      >
        {(!from || from === 'board') && <>Back to Board</>}
      </GradButton>

      <GradButton
        classes={buttonCss}
        outerClasses={nextButtonOuterCss}
        color="green"
        type="button"
        disabled={disabled}
        onClick={() => updateSetBidStep('set-image')}
      >
        Next
      </GradButton>
    </section>
  )
}

export default Controls
