import { Links, Meta, Scripts } from '@remix-run/react'
import clsx from 'clsx'

type Props = ComponentPropsType & {
  gaId: string
}

const Doc = ({ children, gaId }: Props) => {
  const bodyCss = clsx('relative z-0')

  return (
    <html lang="en">
      <head>
        <title>Billboard | Amplify your reach and benefit all</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&display=swap"
        />
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
      <body className={bodyCss}>
        {children}
        <Scripts />
      </body>
    </html>
  )
}

export default Doc
