import { isAddress } from 'viem'

export const makeAddressColor = (address?: `0x${string}`) => {
  let colorA = '#2F353B'
  let colorB = '#2F353B'

  if (!address || !isAddress(address)) {
    return { colorA, colorB }
  }

  colorA = '#' + address.slice(2, 8)
  colorB = '#' + address.slice(-6)

  if (colorA.toLowerCase() === colorB.toLowerCase()) {
    colorB =
      '#' +
      (0xffffff ^ parseInt(colorB.slice(1), 16)).toString(16).padStart(6, '0')
  }

  return { colorA, colorB }
}
