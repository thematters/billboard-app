import { http, createConfig, createStorage } from 'wagmi'
import { optimism, optimismSepolia } from 'wagmi/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const wagmiConfig = createConfig({
  autoConnect: true,
  chains: [optimism, optimismSepolia],
  connectors: [
    injected({
      target: 'metaMask',
      shimDisconnect: true,
    }),
    walletConnect({
      projectId: '',
      showQrModal: true,
    }),
  ],
  ssr: true,
  storage: createStorage({
    storage: {
      getItem: () => null,
      setItem: () => null,
      removeItem: () => null,
    },
  }),
  transports: {
    [optimism.id]: http(),
    [optimismSepolia.id]: http(),
  },
})
