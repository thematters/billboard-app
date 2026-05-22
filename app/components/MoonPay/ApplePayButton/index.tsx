import clsx from 'clsx'
import { useState } from 'react'
import { useAccount } from 'wagmi'

import GradButton from '@components/Button/Grad'
import WalletSvg from '@components/Svg/Wallet'
import useAlert from '@hooks/useAlert'
import useAppEnv from '@hooks/useAppEnv'
import { DATA_STATE } from '@constants'

type PropsType = {
  amount: number
}

const MIN_ONRAMP_AMOUNT = 10

const ApplePayButton = ({ amount }: PropsType) => {
  const { address } = useAccount()
  const { moonPayReady } = useAppEnv()
  const { makeAlert } = useAlert()
  const [isOpening, setIsOpening] = useState(false)

  if (!moonPayReady || !address || amount <= 0) {
    return null
  }

  const onrampAmount = Math.ceil(Math.max(amount, MIN_ONRAMP_AMOUNT))

  const openMoonPay = async () => {
    if (isOpening) {
      return
    }

    setIsOpening(true)
    try {
      const params = new URLSearchParams({
        address,
        amount: onrampAmount.toString(),
        redirectURL: window.location.href,
      })
      const response = await fetch(`/api/moonpay?${params.toString()}`)
      const data = await response.json()

      if (data?.state !== DATA_STATE.successful || !data?.url) {
        throw new Error(data?.error || 'Unable to open MoonPay')
      }

      window.open(data.url, '_blank', 'noopener,noreferrer')
    } catch {
      makeAlert('Unable to open Apple Pay. Please try again later.')
    } finally {
      setIsOpening(false)
    }
  }

  const baseCss = clsx('mt-4 max-w-form mx-auto')
  const hintCss = clsx('mb-3 text-xs text-gray-50 font-normal')
  const buttonCss = clsx('f-row-cc gap-x-2 py-3 w-full')
  const buttonOuterCss = clsx('w-full')

  return (
    <section className={baseCss}>
      <p className={hintCss}>
        Need more USDT? Add about {onrampAmount} Optimism USDT to your connected
        wallet, then return to confirm the bid.
      </p>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        disabled={isOpening}
        onClick={openMoonPay}
      >
        <WalletSvg />
        Add {onrampAmount} USDT with Apple Pay
      </GradButton>
    </section>
  )
}

export default ApplePayButton
