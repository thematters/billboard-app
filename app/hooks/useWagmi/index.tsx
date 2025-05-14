import { createConfig, http } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { useMemo } from 'react'

const useWagmi = (projectId: string) => {
  return useMemo(
    () =>
      createConfig({
        chains: [optimism, optimismSepolia],
        connectors: [
          injected({
            target: 'metaMask',
            shimDisconnect: true,
          }),
          walletConnect({
            projectId,
            showQrModal: true,
          }),
        ],
        transports: {
          [optimism.id]: http(),
          [optimismSepolia.id]: http(),
        },
      }),
    [projectId]
  )
}

export default useWagmi
