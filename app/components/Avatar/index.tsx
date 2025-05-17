import clsx from 'clsx'
import { useAccount } from 'wagmi'

import { makeAddressColor } from '@utils/color'

const Avatar = () => {
  const { address } = useAccount()
  const { colorA, colorB } = makeAddressColor(address)

  const baseCss = clsx('rounded-full size-10')

  return (
    <section
      className={baseCss}
      style={{
        backgroundImage: `linear-gradient(135deg, ${colorA}, ${colorB})`,
      }}
    />
  )
}

export default Avatar
