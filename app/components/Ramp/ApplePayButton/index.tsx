import clsx from 'clsx'
import { useAccount } from 'wagmi'

import GradButton from '@components/Button/Grad'
import WalletSvg from '@components/Svg/Wallet'
import useAppEnv from '@hooks/useAppEnv'
import { toUSDT } from '@utils/num'

type PropsType = {
  amount: number
}

const RAMP_URL = 'https://app.ramp.network/'
const RAMP_ASSET = 'OPTIMISM_USDT'
const MIN_ONRAMP_AMOUNT = 10

const ApplePayButton = ({ amount }: PropsType) => {
  const { address } = useAccount()
  const { rampHostApiKey } = useAppEnv()

  if (!rampHostApiKey || !address || amount <= 0) {
    return null
  }

  const onrampAmount = Math.max(amount, MIN_ONRAMP_AMOUNT)
  const displayAmount = onrampAmount.toFixed(3)

  const openRamp = () => {
    const url = new URL(RAMP_URL)
    const currentUrl = window.location.href
    const logoUrl = new URL('/favicon.svg', window.location.origin).toString()

    url.searchParams.set('hostApiKey', rampHostApiKey)
    url.searchParams.set('hostAppName', 'Billboard')
    url.searchParams.set('hostLogoUrl', logoUrl)
    url.searchParams.set('defaultFlow', 'ONRAMP')
    url.searchParams.set('enabledFlows', 'ONRAMP')
    url.searchParams.set('inAsset', 'USD')
    url.searchParams.set('outAsset', RAMP_ASSET)
    url.searchParams.set('outAssetValue', toUSDT(onrampAmount, 0))
    url.searchParams.set('paymentMethodType', 'APPLE_PAY')
    url.searchParams.set('userAddress', address)
    url.searchParams.set('successUrl', currentUrl)
    url.searchParams.set('failureUrl', currentUrl)

    window.open(url.toString(), '_blank', 'noopener,noreferrer')
  }

  const baseCss = clsx('mt-4 max-w-form mx-auto')
  const hintCss = clsx('mb-3 text-xs text-gray-50 font-normal')
  const buttonCss = clsx('f-row-cc gap-x-2 py-3 w-full')
  const buttonOuterCss = clsx('w-full')

  return (
    <section className={baseCss}>
      <p className={hintCss}>
        Need more USDT? Add about {displayAmount} Optimism USDT to your
        connected wallet, then return to confirm the bid.
      </p>
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="dim-green"
        type="button"
        onClick={openRamp}
      >
        <WalletSvg />
        Add {displayAmount} USDT with Apple Pay
      </GradButton>
    </section>
  )
}

export default ApplePayButton
