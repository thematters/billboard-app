import type { LinksFunction, LoaderFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'

import Doc from '@components/Doc'
import { readEnv } from '@utils/env'

import rootCss from './root.css'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: rootCss }]

export const loader: LoaderFunction = async () => {
  const env = readEnv()
  return json(env)
}

const App = () => {
  const env = useLoaderData<typeof loader>()
  return (
    <Doc gaId={env.gaId}>
      <Outlet context={env} />
    </Doc>
  )
}

export default App
