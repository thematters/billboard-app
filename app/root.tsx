import type { LinksFunction } from '@remix-run/node'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

import Layout from '~/components/Layout'

import styles from './main.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

const App = () => {
  return (
    <html lang="en">
      <head>
        <title>
          Billboard | A New Generation of Billboard in The Decentralized World
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link
          href="https://fonts.cdnfonts.com/css/saved-by-zero"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
        {/* page content */}
        <Layout>
          <Outlet />
        </Layout>
        <Scripts />

        {/** development **/}
        <ScrollRestoration />
      </body>
    </html>
  )
}

export default App
