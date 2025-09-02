import clsx from 'clsx'
import { useEffect } from 'react'
import { useAccount } from 'wagmi'

import Tabs from '@components/Tabs'
import useQuery from '@hooks/useQuery'

import Loader from '../Loader'

import Rows from './Rows'

type PropsType = {
  items: Array<{ key: string; name: string }>
  selected: string
  setSelected: (value: string) => void
}

const Bidding = ({ items, selected, setSelected }: PropsType) => {
  const { address, isConnected } = useAccount()
  const { data, isLoading, isLoaded, isError, refetch } = useQuery({
    action: '/api/bids/bidding',
    params: { ...(isConnected ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    refetch({ ...(isConnected ? { address } : {}) })
  }, [address, isConnected])

  const titleCss = clsx('section-title px-4 text-left md:text-center')
  const tabCss = clsx('mt-4 md:mt-5 px-4 md:px-0')

  return (
    <>
      <h1 className={titleCss}>Bids</h1>
      <Tabs
        classes={tabCss}
        items={items}
        selected={selected}
        onClick={setSelected}
      />
      <Loader data={data} isLoading={isLoading} isError={isError} />
      {isLoaded && <Rows data={data || {}} />}
    </>
  )
}

export default Bidding
