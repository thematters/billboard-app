import { optimism, optimismSepolia } from 'wagmi/chains'

export const readEnv = () => {
  const { env } = process
  const isProduction = env.ENV === 'production'
  const urlContract = `${env.URL_OP_EXPLORER}/address/${env.ADDRESS_OPERATOR}`

  return {
    env: env.ENV,
    chain: isProduction ? optimism : optimismSepolia,
    chainId: isProduction ? optimism.id : optimismSepolia.id,
    addressOperator: env.ADDRESS_OPERATOR,
    addressRegistry: env.ADDRESS_REGISTRY,
    addressDistribution: env.ADDRESS_DISTRIBUTION,
    addressMulticall3: env.ADDRESS_MULTICALL3,
    addressUSDT: env.ADDRESS_USDT,
    tokenIdShowCase: env.TOKEN_ID_SHOW_CASE,
    idWalletConnect: env.ID_WALLET_CONNECT,
    urlOpExplorer: env.URL_OP_EXPLORER,
    urlCoinGecko: env.URL_COINGECKO,
    urlContract,
    gaId: env.GA_ID,
  }
}
