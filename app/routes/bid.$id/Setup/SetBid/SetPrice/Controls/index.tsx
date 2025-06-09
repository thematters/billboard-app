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
    const url = from === 'bidding' ? '/mybids?tab=bidding' : `/board/${id}`
    navigate(url)
  }
  const next = () => updateSetBidStep('set-image')

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
        {from === 'bidding' && <>Back to Bids</>}
        {(!from || from === 'board') && <>Back to Board</>}
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
