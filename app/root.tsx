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

import AnaltyicsContext from '@component/Context/Analytics'
import EnvsContext from '@component/Context/Envs'
import WalletContext from '@component/Context/Wallet'
import Doc from '@component/Doc'
import Layout from '@component/Layout'
import { readEnvs } from '@util/envs'

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
        <Doc gaId={envs.gaId}>
          <AnaltyicsContext gaId={envs.gaId}>
            <Layout>
              <Outlet context={envs} />
            </Layout>
            <Scripts />
            <ScrollRestoration />
            <LiveReload />
          </AnaltyicsContext>
        </Doc>
      </WalletContext>
    </EnvsContext>
  )
}

export default App
