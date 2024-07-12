import type { LinksFunction } from '@remix-run/node'
import type { AppEnvs } from '@type'

import {
  LiveReload,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react'
import { json } from '@remix-run/node'
import { useState } from 'react'

import EnvsContext from '@component/Context/Envs'
import WalletContext from '@component/Context/Wallet'
import WalletModalContext from '@component/Context/WalletModal'
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
  const envs = useLoaderData() as AppEnvs
  return (
    <EnvsContext envs={envs}>
      <WalletContext projectId={envs.idWalletConnect}>
        <WalletModalContext>
          <Doc>
            <Layout>
              <Outlet context={envs} />
            </Layout>
            <Scripts />
            <ScrollRestoration />
            <LiveReload />
          </Doc>
        </WalletModalContext>
      </WalletContext>
    </EnvsContext>
  )
}

export default App
