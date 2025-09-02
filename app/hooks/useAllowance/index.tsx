import { erc20Abi } from 'viem'
import { useContext } from 'react'
import { useReadContract } from 'wagmi'

import { AppEnvContextSource } from '@contexts/AppEnv'

const useAllowance = (address: `0x${string}`) => {
  const { addressOperator, addressUSDT } = useContext(AppEnvContextSource)
  return useReadContract({
    abi: erc20Abi,
    address: addressUSDT,
    functionName: 'allowance',
    args: [address, addressOperator],
    query: {
      refetchOnWindowFocus: true,
    },
  })
}

export default useAllowance
