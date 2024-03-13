import { useOutletContext } from '@remix-run/react'
import clsx from 'clsx'
import { encodeFunctionData } from 'viem'
import { useAccount, useWriteContract } from 'wagmi'
import { useEffect } from 'react'

import distributionAbi from '@abis/distribution'
import multicall3Abi from '@abis/multicall3'
import BaseButton from '@components/Button/Base'
import SvgClaimEmpty from '@svgs/ClaimEmpty'
import SvgSpinner from '@svgs/Spinner'

import Item from './Item'

type Props = {
  data: any
  callback: (step: string) => void
}

const Items = ({ data, callback }: Props) => {
  const context = useOutletContext()
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
        (r, d) => {
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
    const calls = base.items.map(({ root, cid, share, proof }) => ({
      target: context.distributionAddress,
      allowFailure: false,
      callData: encodeFunctionData({
        abi: distributionAbi,
        functionName: 'claim',
        args: [root, cid, address, BigInt(share), proof],
      }),
    }))

    writeContract({
      address: context.multicall3Address,
      abi: multicall3Abi,
      functionName: 'aggregate3',
      args: [calls],
    })
  }

  useEffect(() => {
    if (hash && isSuccess) {
      callback('claimed')
    }
  }, [hash, isSuccess])

  const baseCss = clsx('lg:pb-20', 'max-limit')

  const listCss = clsx(
    'border-t border-green',
    'max-h-[642px]',
    'overflow-y-scroll'
  )

  const totalCss = clsx(
    'p-4 md:p-5',
    'bg-green',
    'text-black',
    'text-left md:text-right',
    't-16 md:t-20'
  )

  const totalHeadCss = clsx('font-normal', 'mr-2')

  const totalNumCss = clsx('font-bold')

  const btnCss = clsx('mt-10', 'px-28', 'mx-auto', 't-18', 'font-normal')

  const errorCss = clsx('mt-5', 't-14', 'text-red', 'text-center', 'opacity-60')

  return (
    <section className={baseCss}>
      <section className="section-title">CLAIM FUNDING</section>
      <section className={listCss}>
        {base.items.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </section>
      <section className={totalCss}>
        <span className={totalHeadCss}>Total Amount:</span>
        <span className={totalNumCss}>{base.total.toFixed(2)} USDT</span>
      </section>
      <BaseButton css={btnCss} color="dim" click={claim}>
        {isPending ? <SvgSpinner css="animate-spin" height={27} /> : 'Claim'}
      </BaseButton>
      {isError && error && (
        <section className={errorCss}>
          <p>Error Occurred:</p>
          <p>{error.shortMessage}</p>
        </section>
      )}
    </section>
  )
}

export default Items
