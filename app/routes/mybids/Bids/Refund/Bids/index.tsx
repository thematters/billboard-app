import clsx from 'clsx'
import { useEffect } from 'react'
import { encodeFunctionData } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'

import ABIOperator from '@abi/operator'
import ABIMulticall3 from '@abi/multicall3'
import BaseButton from '@component/Button/Base'
import ErrorMessage from '@component/Error'
import useEnvs from '@hook/useEnvs'
import SvgSpinnerDim from '@svg/SpinnerDim'

import Bid from './Bid'

type Props = {
  address?: `0x${string}`
  bids: Record<string, any>[]
  setParentStep: (value: string) => void
}

const Bids = ({ address, bids, setParentStep }: Props) => {
  const envs = useEnvs()
  const { data, error, isPending, isSuccess, writeContract } =
    useWriteContract()

  const amount = bids.reduce((r, { bid }) => {
    r += Number(((Number(bid.price) + Number(bid.tax)) / 1e6).toFixed(2))
    return r
  }, 0)

  const onRefund = () => {
    if (!address) {
      return
    }

    const calls = bids.map(({ board, epoch }: Record<string, any>) => ({
      target: envs.addressOperator as `0x${string}`,
      allowFailure: false,
      callData: encodeFunctionData({
        abi: ABIOperator,
        functionName: 'withdrawBid',
        args: [BigInt(board.id), BigInt(epoch), address],
      }),
    }))

    writeContract({
      address: envs.addressMulticall3 as `0x${string}`,
      abi: ABIMulticall3,
      functionName: 'aggregate3',
      args: [calls],
    })
  }

  useEffect(() => {
    if (data && isSuccess) {
      setParentStep('refunded')
    }
  }, [data, isSuccess])

  const amountCss =
    'p-5 bg-green f-center-start md:f-center-end t-16 md:t-20 text-black'
  const btnCss = 'mx-auto mt-10 w-full md:w-[250px] f-center t-18'

  return (
    <>
      {bids.map((data: Record<string, any>, idx: number) => (
        <Bid key={idx} data={data} />
      ))}
      <div className={amountCss}>
        Total:&nbsp;
        <span className="font-semibold">{amount} USDT</span>
      </div>
      <BaseButton css={btnCss} color="grass" click={onRefund}>
        {isPending ? (
          <SvgSpinnerDim css="animate-spin" height={27} />
        ) : (
          'Get Refund'
        )}
      </BaseButton>
      {error && <ErrorMessage message={(error as any).shortMessage || ''} />}
    </>
  )
}

export default Bids
