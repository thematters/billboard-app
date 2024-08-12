import { useFetcher } from '@remix-run/react'
import { useEffect } from 'react'

import useQueryData from '@hook/useQueryData'
import SvgSpinner from '@svg/Spinner'

type Props = {
  id: string
  address?: `0x${string}`
  setParentStep: (value: string) => void
}

const Verify = ({ id, address, setParentStep }: Props) => {
  const { data, isLoading, isLoaded, isError, submit } = useQueryData({
    action: '/api/verify',
    params: { id, ...(address ? { address } : {}) },
    auto: true,
  })

  useEffect(() => {
    submit(
      { id, ...(address ? { address } : {}) },
      { method: 'GET', action: '/api/verify' }
    )
  }, [id, address])

  useEffect(() => {
    if (!isLoaded) {
      return
    }

    if (data?.whitelisted === true) {
      setParentStep('act')
    } else {
      setParentStep('apply')
    }
  }, [data])

  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const spinnerCss = 'mx-auto my-12 animate-spin opacity-100'

  return (
    <section className={baseCss}>
      <h1 className="section-title">CONFIRM ELIGIBILITY</h1>
      <div className={contentCss}>
        <SvgSpinner css={spinnerCss} width={48} height={48} />
      </div>
    </section>
  )
}

export default Verify
