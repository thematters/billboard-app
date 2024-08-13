import { encodeFunctionData } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'
import { useEffect } from 'react'

import ABIDistribution from '@abi/distribution'
import ABIMulticall3 from '@abi/multicall3'
import ButtonBase from '@component/Button/Base'
import ErrorMessage from '@component/Error'
import useEnvs from '@hook/useEnvs'
import SvgClaimEmpty from '@svg/ClaimEmpty'
import SvgSpinner from '@svg/Spinner'

import Record from './Record'

type Props = {
  data: Record<string, any>[]
  callback: (step: string) => void
}

const Records = ({ data, callback }: Props) => {
  const envs = useEnvs()
  const { address } = useAccount()
  const {
    data: hash,
    error,
    isError,
    isPending,
    isSuccess,
    writeContract,
  } = useWriteContract()

  const base = data.reduce(
    (r, v) => {
      const sub = v.items.reduce(
        (r: Record<string, any>, d: Record<string, any>) => {
          const amount = Number(d.amount) / 1e6
          r.items.push({ ...d, root: v.root, amount })
          r.amount = r.amount + amount
          return r
        },
        { items: [], amount: 0 }
      )

      r.items = [...r.items, ...sub.items]
      r.total = r.total + sub.amount
      return r
    },
    { items: [], total: 0 }
  )

  const claim = async () => {
    if (!address) {
      return
    }

    const calls = base.items.map(
      ({ root, cid, share, proof }: Record<string, any>) => ({
        target: envs.addressDistribution,
        allowFailure: false,
        callData: encodeFunctionData({
          abi: ABIDistribution,
          functionName: 'claim',
          args: [root, cid, address, BigInt(share), proof],
        }),
      })
    )

    writeContract({
      address: envs.addressMulticall3 as `0x${string}`,
      abi: ABIMulticall3,
      functionName: 'aggregate3',
      args: [calls],
    })
  }

  useEffect(() => {
    if (hash && isSuccess) {
      callback('claimed')
    }
  }, [hash, isSuccess])

  const baseCss = 'lg:pb-20 max-limit'
  const listCss = 'border-t border-green max-h-[642px] overflow-y-scroll'
  const totalCss =
    'p-4 md:p-5 bg-green text-black text-left md:text-right t-16 md:t-20'
  const totalHeadCss = 'font-normal mr-2'
  const totalNumCss = 'font-bold'
  const btnCss = 'mt-10 px-28 mx-auto t-18 font-normal'

  return (
    <section className={baseCss}>
      <h1 className="section-title">CLAIM FUNDING</h1>
      <div className={listCss}>
        {base.items.map((item: Record<string, any>, index: number) => (
          <Record key={index} data={item} />
        ))}
      </div>
      <div className={totalCss}>
        <span className={totalHeadCss}>Total Amount:</span>
        <span className={totalNumCss}>{base.total.toFixed(6)} USDT</span>
      </div>
      <ButtonBase css={btnCss} color="dim" click={claim}>
        {isPending ? <SvgSpinner css="animate-spin" height={27} /> : 'Claim'}
      </ButtonBase>
      {isError && error && (
        <ErrorMessage message={(error as any).shortMessage || ''} />
      )}
    </section>
  )
}

export default Records
