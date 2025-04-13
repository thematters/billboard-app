import type React from 'react'

import { Links, Meta } from '@remix-run/react'

type Props = {
  children: React.ReactNode
  gaId: string
}

const Doc = ({ children, gaId }: Props) => (
  <html lang="en">
    <head>
      <title>Billboard | Amplify your reach and benefit all</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Meta />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <Links />
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      ></script>
      <script
        async
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
          `,
        }}
      />
    </head>
    <body>{children}</body>
  </html>
)

export default Doc
