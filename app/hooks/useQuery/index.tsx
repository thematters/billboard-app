import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'

import { DATA_STATE } from '@constants'

type ParamsType = {
  action: string
  params: Record<string, Anything>
  auto?: boolean
}

const useQuery = ({ action, params, auto = true }: ParamsType) => {
  const { data, state, submit } = useFetcher<Anything>()
  // pre-handled state
  const dataState = data?.state

  const isIdle = state === 'idle'
  const isLoading = state === 'loading'
  const isLoaded = isIdle && dataState === DATA_STATE.successful
  const isError = isIdle && dataState === DATA_STATE.error

  const refetch = (params: Record<string, Anything>) => {
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

export default useQuery
