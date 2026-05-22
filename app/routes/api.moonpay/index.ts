import type { LoaderFunctionArgs } from '@remix-run/node'

import crypto from 'node:crypto'
import { json } from '@remix-run/node'

import { DATA_STATE, ERROR } from '@constants'
import { readSecretEnv } from '@server/env.server'
import { sendError } from '@server/helper.server'

const MOONPAY_CURRENCY_CODE = 'usdt_optimism'
const MOONPAY_PAYMENT_METHOD = 'apple_pay'
const MOONPAY_DEFAULT_BASE_CURRENCY = 'twd'
const MOONPAY_PRODUCTION_URL = 'https://buy.moonpay.com/'
const MOONPAY_SANDBOX_URL = 'https://buy-sandbox.moonpay.com/'

const addressRegex = /^(0x)[0-9a-fA-F]{40}$/

const normalizeAmount = (value: string | null) => {
  const amount = Number(value)

  if (!Number.isFinite(amount) || amount <= 0) {
    throw new Error(ERROR.MOONPAY_AMOUNT_INVALID, {
      cause: ERROR.MOONPAY_AMOUNT_INVALID,
    })
  }

  return Math.ceil(amount)
}

const getRedirectURL = (value: string | null, requestURL: URL) => {
  const fallback = new URL('/bid/1', requestURL)

  if (!value) {
    return fallback.toString()
  }

  const redirectURL = new URL(value, requestURL)
  if (redirectURL.origin !== requestURL.origin) {
    throw new Error(ERROR.MOONPAY_REDIRECT_INVALID, {
      cause: ERROR.MOONPAY_REDIRECT_INVALID,
    })
  }

  return redirectURL.toString()
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  try {
    const requestURL = new URL(request.url)
    const address = requestURL.searchParams.get('address') || ''
    const amount = normalizeAmount(requestURL.searchParams.get('amount'))
    const redirectURL = getRedirectURL(
      requestURL.searchParams.get('redirectURL'),
      requestURL
    )

    if (!addressRegex.test(address)) {
      throw new Error(ERROR.ADDRESS_INVALID, { cause: ERROR.ADDRESS_INVALID })
    }

    const {
      env,
      moonPayApiKey,
      moonPaySecretKey,
      moonPayWidgetUrl,
      moonPayBaseCurrencyCode,
    } = readSecretEnv()

    if (!moonPayApiKey || !moonPaySecretKey) {
      throw new Error(ERROR.MOONPAY_NOT_SET, { cause: ERROR.MOONPAY_NOT_SET })
    }

    const widgetUrl =
      moonPayWidgetUrl ||
      (env === 'production' ? MOONPAY_PRODUCTION_URL : MOONPAY_SANDBOX_URL)
    const url = new URL(widgetUrl)

    url.searchParams.set('apiKey', moonPayApiKey)
    url.searchParams.set('currencyCode', MOONPAY_CURRENCY_CODE)
    url.searchParams.set(
      'baseCurrencyCode',
      (moonPayBaseCurrencyCode || MOONPAY_DEFAULT_BASE_CURRENCY).toLowerCase()
    )
    url.searchParams.set('quoteCurrencyAmount', amount.toString())
    url.searchParams.set('paymentMethod', MOONPAY_PAYMENT_METHOD)
    url.searchParams.set('walletAddress', address)
    url.searchParams.set('redirectURL', redirectURL)

    const signature = crypto
      .createHmac('sha256', moonPaySecretKey)
      .update(url.search)
      .digest('base64')

    url.searchParams.set('signature', signature)

    return json({ state: DATA_STATE.successful, url: url.toString() })
  } catch (error) {
    return sendError(error)
  }
}
