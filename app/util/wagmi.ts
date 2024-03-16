import { http, createConfig } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const wagmiConfig = createConfig({
  chains: [optimism, optimismSepolia],
  connectors: [
    injected({
      target: 'metaMask',
      shimDisconnect: true,
    }),
    walletConnect({
      projectId: '5f7630f2c0ff552d570e44b223ce0116',
      showQrModal: true,
    }),
  ],
  ssr: true,
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http(),
  },
})
