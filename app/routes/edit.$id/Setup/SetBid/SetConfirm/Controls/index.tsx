import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useAccount, useWriteContract } from 'wagmi'

import OperatorABI from '@abis/operator'
import GradButton from '@components/Button/Grad'
import SpinnerSvg from '@components/Svg/Spinner'
import { TX_STATE, TX_ERROR_MESSAGE } from '@constants'
import useAppEnv from '@hooks/useAppEnv'
import useQueryParams from '@hooks/useQueryParams'

type PropsType = {
  bid: Record<string, Anything>
  content: string
  redirect: string
  updateEditBidStep: (value: EditBidStepType) => void
  setStep: (value: EditStepType) => void
}

const Controls = ({
  bid,
  content,
  redirect,
  updateEditBidStep,
  setStep,
}: PropsType) => {
  const env = useAppEnv()
  const { id, epoch } = useQueryParams()
  const [isWaitingTx, setIsWaitingTx] = useState(false)
  const { address } = useAccount()

  const {
    data: editData,
    status: editStatus,
    writeContractAsync: editWrite,
    error: editError,
  } = useWriteContract()

  const isLoading = isWaitingTx
  const error = editError
  const errorMessage = (error as Anything)?.shortMessage || ''
  const isContentChanged =
    content != bid.contentURI || redirect != bid.redirectURI
  const isCompleted = editData && editStatus === TX_STATE.success

  // FIXME: find a better way to handle
  const showError = error && errorMessage !== TX_ERROR_MESSAGE.reject
  const canClick = !isLoading && !isCompleted
  const canConfirm = isContentChanged

  const back = () => updateEditBidStep('set-content')

  const confirm = async () => {
    if (isLoading || !address) {
      return
    }

    try {
      setIsWaitingTx(true)
      await editWrite({
        abi: OperatorABI,
        address: env.addressOperator,
        functionName: 'setBidURIs',
        args: [BigInt(id), BigInt(epoch), content, redirect],
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsWaitingTx(false)
    }
  }

  useEffect(() => {
    if (isLoading) {
      return
    }
    if (editData && editStatus === TX_STATE.success) {
      setStep('success')
    }
  }, [editData, editStatus, isLoading])

  const errorCss = clsx(
    'mt-4 max-w-form mx-auto text-xs text-red-10 font-normal'
  )
  const baseCss = clsx(
    'mt-8 f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 f-row-cc w-full md:max-w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-full md:max-w-[280px] mx-auto')

  return (
    <>
      {showError && (
        <p className={errorCss}>
          Error: {(error as Anything).shortMessage || ''}
        </p>
      )}
      <section className={baseCss}>
        <GradButton
          classes={buttonCss}
          outerClasses={buttonOuterCss}
          color="dim-green"
          type="button"
          disabled={!canClick}
          onClick={back}
        >
          Back
        </GradButton>

        {canConfirm && (
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            disabled={!canClick}
            onClick={confirm}
          >
            {isLoading ? <SpinnerSvg /> : 'Confirm'}
          </GradButton>
        )}
      </section>
    </>
  )
}

export default Controls
