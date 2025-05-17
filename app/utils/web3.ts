export const makeShortAddress = (address?: `0x${string}`) => {
  if (!address) {
    return ' '
  }

  return address.slice(0, 5) + '…' + address.slice(-4)
}
