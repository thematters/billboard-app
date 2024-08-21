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
  isExceededAllowance: boolean
  isLoading: boolean
  approve: () => Promise<void>
  placeBid: () => Promise<void>
  placeBidReset: () => void
  error: any
}

const Foot = ({
  css,
  canLock,
  isLocked,
  setIsLocked,
  isExceededAllowance,
  isLoading,
  approve,
  placeBid,
  placeBidReset,
  error,
}: Props) => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const canConfirm = !isExceededAllowance

  const onCancel = () => {
    const from = searchParams.get('from') || 'showcase'
    navigate(`/${from}`)
  }

  const onClick = () => {
    setIsLocked(!isLocked)
    if (isLocked) {
      placeBidReset()
    }
  }
  const onApprove = () => {
    if (isLoading) {
      return
    }
    approve()
  }
  const onPlaceBid = () => {
    if (isLoading) {
      return
    }
    placeBid()
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
            {isExceededAllowance && (
              <BaseButton css={btnLastCss} color="grass" click={onApprove}>
                {isLoading ? (
                  <SvgSpinnerDim css="animate-spin" width="27" />
                ) : (
                  'Approve USDT'
                )}
              </BaseButton>
            )}
            {canConfirm && (
              <BaseButton css={btnLastCss} color="grass" click={onPlaceBid}>
                {isLoading ? (
                  <SvgSpinnerDim css="animate-spin" width="27" />
                ) : (
                  'Confirm'
                )}
              </BaseButton>
            )}
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
