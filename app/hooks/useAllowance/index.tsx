import { erc20Abi } from 'viem'
import { useContext } from 'react'
import { useReadContract } from 'wagmi'

import { AppEnvContextSource } from '@contexts/AppEnvContext'

const useAllowance = (address: `0x${string}`) => {
  const env = useContext(AppEnvContextSource)
  return useReadContract({
    abi: erc20Abi,
    address: env.addressUSDT as `0x${string}`,
    functionName: 'allowance',
    args: [address, env.addressOperator as `0x${string}`],
    query: {
      refetchOnWindowFocus: true,
    },
  })
}

export default useAllowance
