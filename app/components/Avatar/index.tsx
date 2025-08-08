import clsx from 'clsx'

import { makeAddressColor } from '@utils/color'

type PropsType = {
  address: `0x${string}`
}

const Avatar = ({ address }: PropsType) => {
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
