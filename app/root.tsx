import type { LinksFunction } from '@remix-run/node'
import { Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import Document from '~/components/Document'
import Layout from '~/components/Layout'

import styles from './main.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

const App = () => (
  <Document>
    <Layout>
      <Outlet />
    </Layout>
    <Scripts />
    <ScrollRestoration />
  </Document>
)

export default App
