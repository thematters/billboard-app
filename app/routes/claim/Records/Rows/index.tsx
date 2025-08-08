import clsx from 'clsx'
import Decimal from 'decimal.js'
import { useEffect, useState } from 'react'
import { encodeFunctionData } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

import DistributionABI from '@abis/distribution'
import Multicall3ABI from '@abis/multicall3'
import MonoButton from '@components/Button/Mono'
import SpinnerSvg from '@components/Svg/Spinner'
import { TX_STATE, TX_ERROR_MESSAGE } from '@constants'
import useAppEnv from '@hooks/useAppEnv'

import EmptyRow from '../EmptyRow'

import Row from './Row'

type PropsType = {
  data: Record<string, Anything>
  setStep: (value: ClaimRewardStepType) => void
}

const Rows = ({ data, setStep }: PropsType) => {
  const env = useAppEnv()
  const { address } = useAccount()
  const [isWaitingTx, setIsWaitingTx] = useState(false)

  const base = data?.records || []
  const records = base.reduce(
    (r: Record<string, Anything>, v: Record<string, Anything>) => {
      const sub = v.items.reduce(
        (r: Record<string, Anything>, d: Record<string, Anything>) => {
          const amount = Decimal(d.amount).dividedBy(1e6).toNumber()
          r.items.push({ ...d, root: v.root, amount })
          r.amount = Decimal(r.amount).plus(amount).toNumber()
          return r
        },
        { items: [], amount: 0 }
      )

      r.items = [...r.items, ...sub.items]
      r.total = Decimal(r.total).plus(sub.amount).toNumber()
      return r
    },
    { items: [], total: 0 }
  )

  const {
    data: claimData,
    status: claimStatus,
    writeContractAsync: claimWrite,
    error: claimError,
  } = useWriteContract()

  const error = claimError
  const errorMessage = (error as Anything)?.shortMessage || ''

  const isEmpty = records.items.length === 0
  const isWaiting = isWaitingTx

  const showTxError = error && errorMessage !== TX_ERROR_MESSAGE.reject
  const canClaim = !isEmpty && !isWaiting

  const claim = async () => {
    if (isWaiting || !address) {
      return
    }

    try {
      setIsWaitingTx(true)

      const calls = records.items.map(
        ({ root, cid, share, proof }: Record<string, Anything>) => ({
          target: env.addressDistribution,
          allowFailure: false,
          callData: encodeFunctionData({
            abi: DistributionABI,
            functionName: 'claim',
            args: [root, cid, address, BigInt(share), proof],
          }),
        })
      )

      await claimWrite({
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
    if (claimData && claimStatus === TX_STATE.success) {
      setStep('success')
    }
  }, [claimData, claimStatus, isWaiting])

  const headCss = clsx(
    'grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center'
  )
  const bufferCss = clsx('hidden md:block')
  const titleCss = clsx('section-title px-4 text-left md:text-center')
  const buttonCss = clsx('justify-self-end f-row-cc gap-x-2 py-2 px-5 md:py-3')
  const rowCss = clsx(
    'mt-4 md:mt-5 max-h-[400px] overflow-y-scroll',
    'green-scrollbar',
    {
      '[&>section]:border-b [&>section]:border-gray-80 [&>section]:border-dashed [&>section:last-child]:border-b-0':
        !isEmpty,
    }
  )
  const totalCss = clsx('f-row-cb font-semibold bg-gray-90 rounded-lg p-4 mt-2')
  const totalNumCss = clsx('text-right')
  const errorCss = clsx('mt-4 text-xs text-red-10 text-left font-normal')

  return (
    <>
      <section className={headCss}>
        <div className={bufferCss} />
        <h1 className={titleCss}>Rewards</h1>
        <MonoButton
          classes={buttonCss}
          color="gray"
          type="button"
          shape="circle"
          disabled={!canClaim}
          onClick={claim}
        >
          {isWaitingTx && <SpinnerSvg />}
          Claim All
        </MonoButton>
      </section>
      <section className={rowCss}>
        {records.items.map((d: Record<string, Anything>, index: number) => (
          <Row key={index} data={d} />
        ))}
      </section>
      {!isEmpty && (
        <section className={totalCss}>
          <p>Total</p>
          <p className={totalNumCss}>{records.total} USDT</p>
        </section>
      )}
      {showTxError && (
        <p className={errorCss}>
          Error: {(error as Anything).shortMessage || ''}
        </p>
      )}
      {isEmpty && <EmptyRow />}
    </>
  )
}

export default Rows
