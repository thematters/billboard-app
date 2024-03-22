import { http, createConfig } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const initWagmiConfig = (projectId: string) =>
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
    ssr: true,
    transports: {
      [optimism.id]: http(),
      [optimismSepolia.id]: http(),
    },
  })
