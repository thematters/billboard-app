import type { LinksFunction, LoaderFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'

import Base from '@components/Base'
import Doc from '@components/Doc'
import DrawerContext from '@contexts/DrawerContext'
import ModalContext from '@contexts/ModalContext'
import { readEnv } from '@utils/env'

import rootCss from './root.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: rootCss }]

export const loader: LoaderFunction = async () => {
  const env = readEnv()
  return json(env)
}

const App = () => {
  const env = useLoaderData<typeof loader>()
  return (
    <DrawerContext>
      <ModalContext>
        <Doc gaId={env.gaId}>
          <Base>
            <Outlet context={env} />
          </Base>
        </Doc>
      </ModalContext>
    </DrawerContext>
  )
}

export default App
