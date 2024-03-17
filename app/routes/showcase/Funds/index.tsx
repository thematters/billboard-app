import { useFetcher } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

import Crate from '@component/Crate'
import ErrorMessage from '@component/Error'
import SvgSkeletonFundMD from '@svg/SkeletonFundMD'
import SvgSkeletonFundSM from '@svg/SkeletonFundSM'

import Records from './Records'

const Funds = () => {
  const [step, setStep] = useState('loading')
  const api = useFetcher()
  const data = api?.data

  useEffect(() => {
    api.submit({}, { method: 'GET', action: '/api/fund' })
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
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasBottomBorder>
        <section className="max-limit">
          <section className="section-title">
            FUNDING DISTRIBUTION HISTORY
          </section>
          {(step === 'loading' || step === 'error') && (
            <>
              <SvgSkeletonFundSM css={skeletonSMCss} />
              <SvgSkeletonFundMD css={skeletonMDCss} />
            </>
          )}
          {step === 'loaded' && <Records data={data || {}} />}
          {step === 'error' && <ErrorMessage message={data.error} />}
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Funds
