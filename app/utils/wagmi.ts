import type { Config } from 'wagmi'

import { createConfig, http } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const createWagmiConfig = (() => {
  let config: Config | null = null
  return (projectId: string) => {
    if (config) {
      return config
    }

    config = createConfig({
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
      ssr: true,
    })
    return config
  }
})()
