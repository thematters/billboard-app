import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { erc20Abi } from 'viem'
import { useAccount, useConfig, useWriteContract } from 'wagmi'
import { waitForTransactionReceipt } from 'wagmi/actions'

import OperatorABI from '@abis/operator'
import GradButton from '@components/Button/Grad'
import SpinnerSvg from '@components/Svg/Spinner'
import { MAX_USDT_ALLOWANCE, TX_STATE, TX_ERROR_MESSAGE } from '@constants'
import useAllowance from '@hooks/useAllowance'
import useAppEnv from '@hooks/useAppEnv'
import useQueryParams from '@hooks/useQueryParams'
import { toFloatUSDTAsNumber, toUSDT } from '@utils/num'

type PropsType = {
  prevBid: Record<string, Anything>
  price: number
  content: string
  redirect: string
  totalAmount: number
  isNewBid: boolean
  updateSetBidStep: (value: SetBidStepType) => void
  setStep: (value: BidStepType) => void
}

const Controls = ({
  prevBid,
  price,
  content,
  redirect,
  totalAmount,
  isNewBid,
  updateSetBidStep,
  setStep,
}: PropsType) => {
  const env = useAppEnv()
  const config = useConfig()
  const { id, epoch } = useQueryParams()
  const [isWaitingTx, setIsWaitingTx] = useState<boolean>(false)
  const { address } = useAccount()

  const {
    data: allowanceData,
    refetch: allowanceRefetch,
    isLoading: allowanceIsLoading,
    error: allowanceError,
  } = useAllowance((address || '') as `0x${string}`)

  const { writeContractAsync: approveWrite, error: approveError } =
    useWriteContract()

  const {
    data: bidData,
    status: bidStatus,
    writeContractAsync: bidWrite,
    error: bidError,
  } = useWriteContract()

  // data
  const lastBidPrice = toFloatUSDTAsNumber(prevBid?.price || 0)
  const allowance = toFloatUSDTAsNumber(Number(allowanceData || 0))

  // condition
  const isExceededAllowance = totalAmount > allowance
  const isLoading = isWaitingTx || allowanceIsLoading
  const error = allowanceError || approveError || bidError
  const errorMessage = (error as Anything)?.shortMessage || ''
  const isPriceChanged = price != lastBidPrice
  const isContentChanged =
    content != prevBid.contentURI || redirect != prevBid.redirectURI
  const isCompleted = bidData && bidStatus === TX_STATE.success

  // FIXME: find a better way to handle
  const showError = error && errorMessage !== TX_ERROR_MESSAGE.reject
  const canClick = !isLoading && !isCompleted
  const canConfirm =
    !isExceededAllowance && (isPriceChanged || isContentChanged)

  const back = () => updateSetBidStep('set-image')

  const approve = async () => {
    if (isLoading || !address) {
      return
    }

    try {
      setIsWaitingTx(true)
      const hash = await approveWrite({
        abi: erc20Abi,
        address: env.addressUSDT,
        functionName: 'approve',
        args: [env.addressOperator, BigInt(MAX_USDT_ALLOWANCE)],
      })
      await waitForTransactionReceipt(config, { hash })
      await allowanceRefetch()
    } catch (error) {
      console.error(error)
    } finally {
      setIsWaitingTx(false)
    }
  }

  const confirm = async () => {
    if (isLoading || !address) {
      return
    }

    try {
      setIsWaitingTx(true)
      if (isPriceChanged) {
        await bidWrite({
          abi: OperatorABI,
          address: env.addressOperator,
          functionName: 'placeBid',
          args: [
            BigInt(id),
            BigInt(epoch),
            BigInt(toUSDT(price, 0)),
            content,
            redirect,
          ],
        })
      } else if (isContentChanged) {
        await bidWrite({
          abi: OperatorABI,
          address: env.addressOperator,
          functionName: 'setBidURIs',
          args: [BigInt(id), BigInt(epoch), content, redirect],
        })
      }
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
    if (bidData && bidStatus === TX_STATE.success) {
      setStep(isNewBid ? 'success-new' : 'success-update')
    }
  }, [bidData, bidStatus, isLoading])

  // css
  const errorCss = clsx(
    'mt-4 max-w-form mx-auto text-xs text-red-10 font-normal'
  )
  const baseCss = clsx(
    'mt-8 f-colr gap-y-3 md:f-row-cb md:gap-x-10 max-w-form mx-auto'
  )
  const buttonCss = clsx('py-3 f-row-cc w-full max-w-[280px]')
  const buttonOuterCss = clsx('w-full max-w-[280px] mx-auto')

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

        {isExceededAllowance && (
          <GradButton
            classes={buttonCss}
            outerClasses={buttonOuterCss}
            color="green"
            type="button"
            disabled={!canClick}
            onClick={approve}
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
