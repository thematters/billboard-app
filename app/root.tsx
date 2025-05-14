import type { LinksFunction, LoaderFunction } from '@remix-run/node'

import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider } from 'wagmi'

import Base from '@components/Base'
import Doc from '@components/Doc'
import AppEnvContext from '@contexts/AppEnvContext'
import DrawerContext from '@contexts/DrawerContext'
import ModalContext from '@contexts/ModalContext'
import useWagmi from '@hooks/useWagmi'
import { readEnv } from '@utils/env'

import rootCss from './root.css?url'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: rootCss }]

export const loader: LoaderFunction = async () => {
  const env = readEnv()
  return json(env)
}

const queryClient = new QueryClient()

const App = () => {
  const env = useLoaderData<typeof loader>()
  const config = useWagmi(env.idWalletConnect)

  return (
    <AppEnvContext env={env}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <DrawerContext>
            <ModalContext>
              <Doc>
                <Base>
                  <Outlet context={env} />
                </Base>
              </Doc>
            </ModalContext>
          </DrawerContext>
        </QueryClientProvider>
      </WagmiProvider>
    </AppEnvContext>
  )
}

export default App
