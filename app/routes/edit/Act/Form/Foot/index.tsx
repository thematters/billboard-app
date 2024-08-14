import type { ComponentProps } from '@type'

import { useNavigate, useSearchParams } from '@remix-run/react'

import clsx from 'clsx'

import BaseButton from '@component/Button/Base'
import LinkButton from '@component/Button/Link'
import ErrorMessage from '@component/Error'
import SvgSpinnerDim from '@svg/SpinnerDim'

type Props = ComponentProps & {
  canLock: boolean
  isLocked: boolean
  setIsLocked: (value: boolean) => void
  isLoading: boolean
  edit: () => Promise<void>
  editReset: () => void
  error?: any
}

const Foot = ({
  css,
  canLock,
  isLocked,
  setIsLocked,
  isLoading,
  edit,
  editReset,
  error,
}: Props) => {
  const navigate = useNavigate()

  const onCancel = () => {
    navigate(`/mybids`)
  }

  const onClick = () => {
    setIsLocked(!isLocked)
    if (isLocked) {
      editReset()
    }
  }
  const onEdit = () => {
    if (isLoading) {
      return
    }
    edit()
  }

  const baseCss = clsx('f-col-reverse sm:f-center sm:flex-row', css)
  const btnCss = 'mt-4 sm:mt-0 w-full sm:w-[250px] f-center t-18 font-semibold'
  const btnLinkCss = 'w-full sm:w-fit'
  const btnLastCss = clsx(btnCss, 'sm:ml-5')

  return (
    <>
      <section className={baseCss}>
        {!isLocked && (
          <>
            <BaseButton css={btnCss} color="dim" click={onCancel}>
              Cancel
            </BaseButton>
            <BaseButton
              css={btnLastCss}
              color={canLock ? 'grass' : 'green'}
              click={onClick}
              disabled={!canLock}
            >
              Next
            </BaseButton>
          </>
        )}
        {isLocked && (
          <>
            <BaseButton
              css={btnCss}
              color="dim"
              click={onClick}
              disabled={isLoading}
            >
              Edit
            </BaseButton>
            <BaseButton css={btnLastCss} color="grass" click={onEdit}>
              {isLoading ? (
                <SvgSpinnerDim css="animate-spin" width="27" />
              ) : (
                'Confirm'
              )}
            </BaseButton>
          </>
        )}
      </section>
      {isLocked && !isLoading && error && (
        <ErrorMessage message={(error as any).shortMessage || ''} />
      )}
    </>
  )
}

export default Foot
