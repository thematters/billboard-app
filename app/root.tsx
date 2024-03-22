import type { LinksFunction } from '@remix-run/node'
import type { AppContext } from '@type'

import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { useState } from 'react'
import { optimism, optimismSepolia } from 'wagmi/chains'

import ContextWallet from '@component/Context/Wallet'
import Doc from '@component/Doc'
import Layout from '@component/Layout'
import { readEnvs } from '@util/server'

import styles from './main.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

export const loader = async () => {
  const envs = readEnvs()
  return json(envs)
}

const App = () => {
  const context = useLoaderData() as AppContext
  return (
    <ContextWallet projectId={context.idWalletConnect}>
      <Doc>
        <Layout>
          <Outlet context={context} />
        </Layout>
        <Scripts />
        <ScrollRestoration />
        <LiveReload />
      </Doc>
    </ContextWallet>
  )
}

export default App
