import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'

import { STATE } from '@constant'

type Params = {
  action: string
  params: Record<string, any>
  auto: boolean
}

const useQueryData = ({ action, params, auto = false }: Params) => {
  const { data, state, submit } = useFetcher<any>()
  const dataState = data?.state

  const isLoading = state === 'loading'
  const isIdle = state === 'idle'
  const isLoaded = isIdle && dataState === STATE.successful
  const isError = isIdle && dataState === STATE.error

  const refetch = (params: Record<string, any>) => {
    submit(params, { method: 'GET', action })
  }

  useEffect(() => {
    if (auto === false) {
      return
    }
    submit(params, { method: 'GET', action })
  }, [])

  return { data, isLoading, isLoaded, isError, submit, refetch }
}

export default useQueryData
