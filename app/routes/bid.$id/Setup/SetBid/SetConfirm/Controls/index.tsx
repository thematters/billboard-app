import clsx from 'clsx'
import { useAccount, useWriteContract } from 'wagmi'
import { useEffect, useState } from 'react'

import GradButton from '@components/Button/Grad'
import SpinnerSvg from '@components/Svg/Spinner'
import useAllowance from '@hooks/useAllowance'
import { toFloatUSDT } from '@utils/num'

type PropsType = {
  totalAmount: number
  updateSetBidStep: (value: SetBidStepType) => void
}

const Controls = ({ totalAmount, updateSetBidStep }: PropsType) => {
  const { address } = useAccount()
  const {
    data: allowanceData,
    status: allowanceStatus,
    refetch: allowanceRefetch,
    isLoading: allowanceIsLoading,
    isRefetching: allowanceIsRefetching,
    error: allowanceError,
  } = useAllowance((address || '') as `0x${string}`)

  const {
    data: approveData,
    status: approveStatus,
    isPending: approveIsLoading,
    writeContract: approveWrite,
    error: approveError,
  } = useWriteContract()

  const {
    data: bidData,
    status: bidStatus,
    isPending: bidIsLoading,
    writeContract: bidWrite,
    error: bidError,
    reset: bidReset,
  } = useWriteContract()

  // data
  const allowance = Number(toFloatUSDT(Number(allowanceData || 0)))

  // condition

  const isExceededAllowance = totalAmount > allowance
  const isLoading =
    allowanceIsLoading ||
    allowanceIsRefetching ||
    approveIsLoading ||
    bidIsLoading
  const error = allowanceError || approveError || bidError
  const canConfirm = !isExceededAllowance

  const onApprove = () => {
    if (isLoading) {
      return
    }
    approve()
  }

  const onConfirm = () => {
    if (isLoading || !address) {
      return
    }
  }

  // css
  const baseCss = clsx(
    'mt-8 f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 f-row-cc w-full font-semibold')
  const buttonOuterCss = clsx('w-full')

  return (
    <>
      <section className={baseCss}>
        <GradButton
          classes={buttonCss}
          outerClasses={buttonOuterCss}
          color="dim-green"
          type="button"
          onClick={() => updateSetBidStep('set-price')}
        >
          Edit
        </GradButton>

        {isExceededAllowance && (
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            onClick={onApprove}
          >
            {isLoading ? <SpinnerSvg /> : 'Approve USDT'}
          </GradButton>
        )}

        {canConfirm && (
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            onClick={() => {}}
          >
            {isLoading ? <SpinnerSvg /> : 'Confirm'}
          </GradButton>
        )}
      </section>
    </>
  )
}

export default Controls
