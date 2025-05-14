import { optimism, optimismSepolia } from 'wagmi/chains'

export const readEnv = () => {
  const { env } = process
  const isProd = env.ENV === 'production'
  return {
    env: env.ENV,
    chain: isProd ? optimism : optimismSepolia,
    chainId: isProd ? optimism.id : optimismSepolia.id,
    idWalletConnect: env.ID_WALLET_CONNECT,
    gaId: env.GA_ID,
  }
}
