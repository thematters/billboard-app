import type React from 'react'
import type { Config } from 'wagmi'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { WagmiProvider } from 'wagmi'

import { initWagmiConfig } from '@util/wagmi'

type Props = {
  children: React.ReactNode
  projectId: string
}

const queryClient = new QueryClient()

const WalletContext = ({ children, projectId }: Props) => {
  const [config, setConfig] = useState<Config>(initWagmiConfig(projectId))
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default WalletContext
