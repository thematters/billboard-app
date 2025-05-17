import clsx from 'clsx'
import { useAccount, useChainId } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'

import { makeShortAddress } from '@utils/web3'

const Detail = () => {
  const { address } = useAccount()
  const id = useChainId()

  const name =
    id === optimism.id
      ? 'Optimism'
      : id === optimismSepolia.id
        ? 'Optimism Sepolia'
        : 'Unknown'
  const shortAddress = makeShortAddress(address)

  const baseCss = clsx('f-col-sb m-2')
  const nameCss = clsx('text-xs text-gray-30')
  const addrCss = clsx('pt-[1px] text-sm font-semibold')

  return (
    <section className={baseCss}>
      <p className={nameCss}>{name}</p>
      <p className={addrCss}>{shortAddress}</p>
    </section>
  )
}

export default Detail
