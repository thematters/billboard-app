import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import SvgSkeletonBoardMD from '@svg/SkeletonBoardMD'
import SvgSkeletonBoardSM from '@svg/SkeletonBoardSM'

import Meta from './Meta'

const Board = () => {
  const [step, setStep] = useState('loading')
  const api = useFetcher()
  const data = api?.data

  useEffect(() => {
    api.submit({}, { method: 'GET', action: '/api/board' })
  }, [])

  useEffect(() => {
    const apiState = api?.state
    const dataState = api?.data?.state

    if (apiState === 'loading' && apiState !== 'loading') {
      setStep('loading')
    } else if (apiState === 'idle' && dataState === 'error') {
      setStep('error')
    } else if (apiState === 'idle' && dataState === 'successful') {
      setStep('loaded')
    }
  }, [api])

  const innerCss = clsx('py-8 lg:py-20')
  const skeletonSMCss = clsx('w-full', 'md-hidden')
  const skeletonMDCss = clsx('w-full', 'md-shown')

  return (
    <Crate css="menu-spacing">
      <Crate.Inner css={innerCss} hasDots hasXBorder hasBottomBorder>
        <section className="max-limit">
          {(step === 'loading' || step === 'error') && (
            <>
              <SvgSkeletonBoardSM css={skeletonSMCss} />
              <SvgSkeletonBoardMD css={skeletonMDCss} />
            </>
          )}
          {step === 'loaded' && <Meta data={data} />}
          {step === 'error' && <ErrorMessage message={data.error} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Board
