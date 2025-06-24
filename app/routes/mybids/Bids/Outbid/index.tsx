import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { encodeFunctionData } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

import Multicall3ABI from '@abis/multicall3'
import OperatorABI from '@abis/operator'
import MonoButton from '@components/Button/Mono'
import Tabs from '@components/Tabs'
import SpinnerSvg from '@components/Svg/Spinner'
import { TX_STATE, TX_ERROR_MESSAGE } from '@constants'
import useAppEnv from '@hooks/useAppEnv'
import useQuery from '@hooks/useQuery'

import Loader from '../Loader'

import Rows from './Rows'

type PropsType = {
  items: Array<{ key: string; name: string }>
  selected: string
  setSelected: (value: string) => void
  setStep: (value: MyBidsStepType) => void
}

const Outbid = ({ items, selected, setSelected, setStep }: PropsType) => {
  const env = useAppEnv()
  const { address, isConnected } = useAccount()
  const [isWaitingTx, setIsWaitingTx] = useState(false)
  const { data, isLoading, isLoaded, isError, refetch } = useQuery({
    action: '/api/bids/outbid',
    params: { ...(isConnected ? { address } : {}) },
    auto: true,
  })

  const {
    data: refundData,
    status: refundStatus,
    writeContractAsync: refundWrite,
    error: refundError,
  } = useWriteContract()

  useEffect(() => {
    refetch({ ...(isConnected ? { address } : {}) })
  }, [address, isConnected])

  const outbids = data?.outbids || []
  const error = refundError
  const errorMessage = (error as Anything)?.shortMessage || ''

  const isEmpty = outbids.length === 0
  const isWaiting = isLoading || isWaitingTx

  const showTxError = error && errorMessage !== TX_ERROR_MESSAGE.reject
  const canRefund = !isEmpty && !isWaiting

  const refund = async () => {
    if (isWaiting || !address) {
      return
    }

    try {
      setIsWaitingTx(true)

      const calls = outbids.map(
        ({ board, epoch }: Record<string, Anything>) => ({
          target: env.addressOperator,
          allowFailure: false,
          callData: encodeFunctionData({
            abi: OperatorABI,
            functionName: 'withdrawBid',
            args: [BigInt(board.id), BigInt(epoch), address],
          }),
        })
      )

      await refundWrite({
        address: env.addressMulticall3,
        abi: Multicall3ABI,
        functionName: 'aggregate3',
        args: [calls],
      })
    } catch (error) {
      console.error(error)
    } finally {
      setIsWaitingTx(false)
    }
  }

  useEffect(() => {
    if (isWaiting) {
      return
    }
    if (refundData && refundStatus === TX_STATE.success) {
      setStep('success')
    }
  }, [refundData, refundStatus, isWaiting])

  const headCss = clsx(
    'grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center'
  )
  const bufferCss = clsx('hidden md:block')
  const titleCss = clsx('section-title px-4 text-left md:text-center')
  const buttonCss = clsx('justify-self-end f-row-cc gap-x-2 py-2 px-5 md:py-3')
  const tabCss = clsx('mt-4 md:mt-5 px-4 md:px-0')
  const errorCss = clsx('mt-4 text-xs text-red-10 text-left font-normal')

  return (
    <>
      <section className={headCss}>
        <div className={bufferCss} />
        <h1 className={titleCss}>Bids</h1>
        <MonoButton
          classes={buttonCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!canRefund}
          onClick={refund}
        >
          {isWaitingTx && <SpinnerSvg />}
          Refund All
        </MonoButton>
      </section>
      <Tabs
        classes={tabCss}
        items={items}
        selected={selected}
        onClick={setSelected}
      />
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {showTxError && (
        <p className={errorCss}>
          Error: {(error as Anything).shortMessage || ''}
        </p>
      )}
      {isLoaded && <Rows data={data || {}} />}
    </>
  )
}

export default Outbid
