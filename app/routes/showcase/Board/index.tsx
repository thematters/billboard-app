import { useEffect } from 'react'
import { isAddress } from 'viem'
import { useAccount } from 'wagmi'

import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import useEnvs from '@hook/useEnvs'
import useQueryData from '@hook/useQueryData'
import SvgLoaderBoardMD from '@svg/Loader/BoardMD'
import SvgLoaderBoardSM from '@svg/Loader/BoardSM'

import Meta from './Meta'

const Board = () => {
  const { tokenIdShowCase: id } = useEnvs()
  const { address, isConnected } = useAccount()
  const isEstablished = isAddress(address || '') && isConnected

  const { data, isLoading, isLoaded, isError, submit } = useQueryData({
    action: '/api/board',
    params: { id, ...(isEstablished ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    submit(
      { id, ...(isEstablished ? { address } : {}) },
      { method: 'GET', action: '/api/board' }
    )
  }, [id, address])

  const innerCss = 'py-8 lg:py-20'
  const loaderSMCss = 'w-full md-hidden'
  const loaderMDCss = 'w-full md-shown'

  return (
    <Crate css="menu-spacing">
      <Crate.Inner css={innerCss} hasXBorder hasBottomBorder>
        <section className="max-limit">
          {(isLoading || isError) && (
            <>
              <SvgLoaderBoardSM css={loaderSMCss} />
              <SvgLoaderBoardMD css={loaderMDCss} />
              {isError && <ErrorMessage message={data.error || data.code} />}
            </>
          )}
          {isLoaded && <Meta data={data} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Board
