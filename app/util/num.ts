import Decimal from 'decimal.js'
import { isInteger } from 'lodash-es'

import { EPOCH_IN_DAYS } from '@constant'

export const toFloatTaxRate = (taxRate: number) => {
  const num = new Decimal(taxRate)
  return num.dividedBy(1000).dividedBy(EPOCH_IN_DAYS).toString()
}

export const toPercentTaxRate = (taxRate: number) => {
  const num = new Decimal(taxRate)
  return num.times(100).toString()
}

export const toUSDT = (num: number, dp?: number) => {
  const value = new Decimal(num).times(1e6)
  return isInteger(dp) ? value.toFixed(dp) : value.toString()
}

export const toFloatUSDT = (num: number, dp?: number) => {
  const value = new Decimal(num).dividedBy(1e6)
  return isInteger(dp) ? value.toFixed(dp) : value.toString()
}

export const calAmount = (price: number, tax: number, dp?: number) => {
  const value = new Decimal(price).plus(tax).dividedBy(1e6)
  return isInteger(dp) ? value.toFixed(dp) : value.toString()
}

export const calTotalAmount = (price: number, taxRate: number, dp?: number) => {
  const tax = new Decimal(price).times(taxRate).times(EPOCH_IN_DAYS)
  const value = new Decimal(price).plus(tax)
  return isInteger(dp) ? value.toFixed(dp) : value.toString()
}
