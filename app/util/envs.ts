import { optimism, optimismSepolia } from 'wagmi/chains'

export const readEnvs = () => {
  const envs = process.env
  const isProduction = envs.ENV === 'production'
  const urlContract = `${envs.URL_OP_EXPLORER}/address/${envs.ADDRESS_OPERATOR}`
  return {
    env: envs.ENV,
    chain: isProduction ? optimism : optimismSepolia,
    chainId: isProduction ? optimism.id : optimismSepolia.id,
    addressOperator: envs.ADDRESS_OPERATOR,
    addressRegistry: envs.ADDRESS_REGISTRY,
    addressDistribution: envs.ADDRESS_DISTRIBUTION,
    addressMulticall3: envs.ADDRESS_MULTICALL3,
    addressUSDT: envs.ADDRESS_USDT,
    tokenIdShowCase: envs.TOKEN_ID_SHOW_CASE,
    idWalletConnect: envs.ID_WALLET_CONNECT,
    urlOpExplorer: envs.URL_OP_EXPLORER,
    urlCoinGecko: envs.URL_COINGECKO,
    urlContract,
    gaId: envs.GA_ID,
  }
}
