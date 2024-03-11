import type { LinksFunction } from '@remix-run/node'

import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { optimism, optimismSepolia } from 'wagmi/chains'

import Document from '@components/Document'
import Layout from '@components/Layout'
import WalletContext from '@components/WalletContext'

import styles from './main.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async () => {
  const isProduction = process.env.ENV === 'production'
  return {
    env: process.env.ENV || '',
    chainId: isProduction ? optimism.id : optimismSepolia.id,
    billboardAddress: process.env.BILLBOARD_ADDRESS,
    billboardRegistryAddress: process.env.BILLBOARD_REGISTRY_ADDRESS,
    distributionAddress: process.env.DISTRIBUTION_ADDRESS,
    showCaseTokenId: process.env.SHOW_CASE_TOKEN_ID,
    opExplorerURL: process.env.OP_EXPLORER_URL,
    coinGeckoURL: process.env.COINGECKO_URL,
  }
}

const App = () => {
  const context = useLoaderData<typeof loader>()
  return (
    <WalletContext>
      <Document>
        <Layout>
          <Outlet context={context} />
        </Layout>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </Document>
    </WalletContext>
  )
}

export default App
