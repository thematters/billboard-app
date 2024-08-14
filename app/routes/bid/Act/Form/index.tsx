import { waitForTransactionReceipt } from '@wagmi/core'
import isUrl from 'is-url'
import { useEffect, useState } from 'react'
import { erc20Abi } from 'viem'
import { useBalance, useConfig, useWriteContract } from 'wagmi'

import ABIOperator from '@abi/operator'
import { MAX_USDT_ALLOWANCE } from '@constant'
import useEnvs from '@hook/useEnvs'
import useUSDT from '@hook/useUSDT'
import { calTotalAmount, toFloatTaxRate, toFloatUSDT, toUSDT } from '@util/num'

import Auction from './Auction'
import Content from './Content'
import Foot from './Foot'
import Price from './Price'

type Props = {
  data: Record<string, any>
  id: string
  epoch: string
  address?: `0x${string}`
  setParentStep: (value: string) => void
}

const Form = ({ data, id, epoch, address, setParentStep }: Props) => {
  const envs = useEnvs()
  const config = useConfig()
  const { board, bid } = data
  const [price, setPrice] = useState<number>(
    Number(toFloatUSDT(Number(bid?.price || 0)))
  )
  const [content, setContent] = useState(bid?.contentURI || '')
  const [redirect, setRedirect] = useState(bid?.redirectURI || '')
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const [isWaitingTx, setIsWaitingTx] = useState<boolean>(false)

  const { data: balanceData } = useBalance({
    address,
    token: envs.addressUSDT as `0x${string}`,
  })
  const {
    data: usdtData,
    status: usdtStatus,
    refetch: usdtRefetch,
    isLoading: usdtIsLoading,
    isRefetching: usdtIsRefetching,
    error: usdtError,
  } = useUSDT((address || '') as `0x${string}`)
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

  const lastBidPrice = Number(toFloatUSDT(Number(bid?.price || 0)))
  const taxRate = Number(toFloatTaxRate(Number(board.taxRate)))
  const allowance = Number(toFloatUSDT(Number(usdtData || 0)))
  const amount = Number(calTotalAmount(price, taxRate, 3))

  const isSufficient = Number(balanceData?.formatted || 0) >= price
  const isExceededAllowance = amount > allowance
  const isValidRedirect = redirect === '' || isUrl(redirect)
  const isContentChanged =
    content != bid.contentURI || redirect != bid.redirectURI
  const isPriceChanged = price != lastBidPrice
  const isLoading =
    usdtIsLoading ||
    usdtIsRefetching ||
    approveIsLoading ||
    isWaitingTx ||
    bidIsLoading
  const hasBid = Number(bid?.placedAt || 0) > 0
  const error = usdtError || approveError || bidError
  const canLock =
    isSufficient &&
    isValidRedirect &&
    price > 0 &&
    (isPriceChanged || isContentChanged)

  const approve = async () => {
    if (!address) {
      return
    }
    approveWrite({
      abi: erc20Abi,
      address: envs.addressUSDT as `0x${string}`,
      functionName: 'approve',
      args: [envs.addressOperator as `0x${string}`, BigInt(MAX_USDT_ALLOWANCE)],
    })
  }

  const placeBid = async () => {
    if (!address) {
      return
    }

    if (isPriceChanged) {
      bidWrite({
        abi: ABIOperator,
        address: envs.addressOperator as `0x${string}`,
        functionName: 'placeBid',
        args: [
          BigInt(id),
          BigInt(epoch),
          BigInt(toUSDT(price, 0)),
          content,
          redirect,
        ],
      })
    } else {
      if (isContentChanged) {
        bidWrite({
          abi: ABIOperator,
          address: envs.addressOperator as `0x${string}`,
          functionName: 'setBidURIs',
          args: [BigInt(id), BigInt(epoch), content, redirect],
        })
      }
    }
  }

  const placeBidReset = () => {
    bidReset()
  }

  useEffect(() => {
    if (approveData && approveStatus === 'success') {
      ;(async () => {
        setIsWaitingTx(true)
        await waitForTransactionReceipt(config, {
          hash: approveData,
        })
        usdtRefetch()
        setIsWaitingTx(false)
      })()
    }
  }, [approveData, approveStatus])

  useEffect(() => {
    if (bidData && bidStatus === 'success') {
      setParentStep(hasBid ? 'updated' : 'success')
    }
  }, [bidData, bidStatus])

  const baseCss = 'p-5 mx-auto max-w-[688px] bg-black rounded-lg'
  const innerCss = 'cols-1 gap-y-6'
  const dividerCss = 'border-b border-dashed border-beige/30'
  const nameCss = 't-18 sm:t-20 font-semibold'
  const totalCss = 'mt-2 cols-2 t-14'
  const footCss = 'mt-5 sm:mt-10'

  return (
    <>
      <section className={baseCss}>
        <section className={innerCss}>
          <p className={nameCss}>{board.name}</p>

          {/* Auction */}
          <Auction data={data} />
          <div className={dividerCss} />

          {/* Content */}
          <Content
            data={data}
            content={content}
            setContent={setContent}
            redirect={redirect}
            setRedirect={setRedirect}
            isLocked={isLocked}
          />
          <div className={dividerCss} />

          {/* Price */}
          <Price
            data={data}
            balance={balanceData}
            price={price}
            setPrice={setPrice}
            isLocked={isLocked}
          />
        </section>
      </section>

      {/* Foot */}
      <Foot
        css={footCss}
        canLock={canLock}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        isExceededAllowance={isExceededAllowance}
        isLoading={isLoading}
        approve={approve}
        placeBid={placeBid}
        placeBidReset={placeBidReset}
        error={error}
      />
    </>
  )
}

export default Form
