import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import useQueryParams from '@hooks/useQueryParams'

type PropsType = {
  disabled: boolean
  updateSetBidStep: (value: SetBidStepType) => void
}

const Controls = ({ disabled, updateSetBidStep }: PropsType) => {
  const { id, from } = useQueryParams()

  const isFromMyBids = from === 'accepted' || from === 'bidding'
  const backUrl = isFromMyBids ? `/mybids?tab=${from}` : `/board/${id}`

  const next = () => updateSetBidStep('set-content')

  const baseCss = clsx(
    'f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('f-row-cc py-3 w-full')
  const buttonOuterCss = clsx('w-full')

  return (
    <section className={baseCss}>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="link"
        to={backUrl}
        target="_self"
      >
        {isFromMyBids ? 'Back to Bids' : 'Back to Board'}
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
