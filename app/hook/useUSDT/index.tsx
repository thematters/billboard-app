import { erc20Abi } from 'viem'
import { useReadContract } from 'wagmi'

import useEnvs from '../useEnvs'

const useUSDT = (address: `0x${string}`) => {
  const envs = useEnvs()
  return useReadContract({
    abi: erc20Abi,
    address: envs.addressUSDT as `0x${string}`,
    functionName: 'allowance',
    args: [address, envs.addressOperator as `0x${string}`],
    query: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  })
}

export default useUSDT
