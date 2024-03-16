import type React from 'react'

import { Links, Meta } from '@remix-run/react'

type Props = {
  children: React.ReactNode
}

const Doc = ({ children }: Props) => (
  <html lang="en">
    <head>
      <title>
        Billboard | On-chain Billboard to Democratize the Attention Economy
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
    <body>{children}</body>
  </html>
)

export default Doc
