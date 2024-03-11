import type React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import { wagmiConfig } from '@utils/wagmi'

type Props = {
  children: React.ReactNode
}

const queryClient = new QueryClient()

const WalletContext = ({ children }: Props) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletContext
