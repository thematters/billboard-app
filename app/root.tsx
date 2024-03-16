import type { LinksFunction } from '@remix-run/node'

import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { optimism, optimismSepolia } from 'wagmi/chains'

import Doc from '@component/Doc'
import Layout from '@component/Layout'
import WalletContext from '@component/Context/Wallet'
import { readEnvs } from '@util/server'

import styles from './main.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async () => {
  const envs = readEnvs()
  return envs
}

const App = () => {
  const context = useLoaderData()
  return (
    <WalletContext>
      <Doc>
        <Layout>
          <Outlet context={context} />
        </Layout>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </Doc>
    </WalletContext>
  )
}

export default App
