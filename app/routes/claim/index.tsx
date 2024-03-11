import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount, useDisconnect } from 'wagmi'

import Crate from '@components/Crate'
import WalletModal from '@components/Modals/WalletModal'
import useModal from '@hooks/useModal'

import Empty from './Empty'
import Error from './Error'
import Greet from './Greet'
import Items from './Items'
import Skeleton from './Skeleton'

const Claim = () => {
  const { isOpened, openModal, closeModal } = useModal(false)
  const { address, isConnected, isConnecting } = useAccount()
  const { disconnect } = useDisconnect()
  const apiFetcher = useFetcher()
  const data = apiFetcher?.data

  // step state
  const isEstablished = isAddress(address) && isConnected
  const isLoading = isEstablished && apiFetcher?.state === 'loading'
  const isLoaded = isEstablished && data?.state === 'successful'
  const isError = isEstablished && data?.state === 'error'

  // data state
  const isEmpty = isLoaded && (!data?.count || data?.count === 0)
  const isClaimable = isLoaded && !isEmpty

  useEffect(() => {
    if (isEstablished) {
      closeModal()
      apiFetcher.submit({ address }, { methid: 'GET', action: '/api/unclaim' })
    }
  }, [address, isConnected])

  const claimCallback = () => {
    //TODO
  }

  const innerCss = clsx('py-10 lg:py-20')

  return (
    <>
      <Crate css="menu-spacing">
        <Crate.Inner css={innerCss} hasDots hasXBorder>
          {!isEstablished && <Greet openModal={openModal} />}
          {isLoading && <Skeleton />}
          {isClaimable && (
            <Items
              address={address}
              data={data.items}
              callback={claimCallback}
            />
          )}
          {isEmpty && <Empty click={disconnect} />}
          {isError && <Error click={disconnect} />}
        </Crate.Inner>
      </Crate>

      <WalletModal isOpened={isOpened} open={openModal} close={closeModal} />
    </>
  )
}

export default Claim
