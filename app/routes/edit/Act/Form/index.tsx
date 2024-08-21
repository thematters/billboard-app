import { waitForTransactionReceipt } from '@wagmi/core'
import isUrl from 'is-url'
import { useEffect, useState } from 'react'
import { erc20Abi } from 'viem'
import { useBalance, useConfig, useWriteContract } from 'wagmi'

import ABIOperator from '@abi/operator'
import { MAX_USDT_ALLOWANCE } from '@constant'
import useEnvs from '@hook/useEnvs'

import Auction from './Auction'
import Content from './Content'
import Foot from './Foot'

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
  const [content, setContent] = useState(bid?.contentURI || '')
  const [redirect, setRedirect] = useState(bid?.redirectURI || '')
  const [isLocked, setIsLocked] = useState<boolean>(false)
  const {
    data: editData,
    status: editStatus,
    isPending: editIsLoading,
    writeContract: editWrite,
    error: editError,
    reset: editReset,
  } = useWriteContract()

  const isValidRedirect = redirect === '' || isUrl(redirect)
  const isContentChanged =
    content != bid.contentURI || redirect != bid.redirectURI
  const isLoading = editIsLoading
  const error = editError
  const canLock = isValidRedirect && isContentChanged

  const edit = async () => {
    if (!address) {
      return
    }

    if (isContentChanged) {
      editWrite({
        abi: ABIOperator,
        address: envs.addressOperator as `0x${string}`,
        functionName: 'setBidURIs',
        args: [BigInt(id), BigInt(epoch), content, redirect],
      })
    }
  }

  useEffect(() => {
    if (editData && editStatus === 'success') {
      setParentStep('success')
    }
  }, [editData, editStatus])

  const baseCss = 'p-5 mx-auto max-w-[688px] bg-black rounded-lg'
  const innerCss = 'cols-1 gap-y-6'
  const dividerCss = 'border-b border-dashed border-beige/30'
  const nameCss = 't-18 sm:t-20 font-semibold'
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
        </section>
      </section>

      {/* Foot */}
      <Foot
        css={footCss}
        canLock={canLock}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        isLoading={isLoading}
        edit={edit}
        editReset={editReset}
        error={error}
      />
    </>
  )
}

export default Form
