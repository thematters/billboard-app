import clsx from 'clsx'

import LinkButton from '@components/Button/Link'
import Crate from '@components/Crate'

const History = () => {
  const innerCss = clsx('py-10 lg:py-[4.5rem]')

  const btnCss = clsx('px-28', 'mx-auto', 'f-center', 'font-normal')

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasTopBorder>
        {/* Title */}
        <section className="section-title">DISTRIBUTED HISTORY</section>

        {/* History */}

        <LinkButton css={btnCss} color="dim" to="/claim">
          Claim
        </LinkButton>
      </Crate.Inner>
    </Crate>
  )
}

export default History
