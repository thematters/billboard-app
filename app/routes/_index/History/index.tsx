import clsx from 'clsx'

import LinkButton from '~/components/Buttons/Link'
import Crate from '~/components/Crate'

const History = () => {
  const innerCss = clsx('py-10 lg:py-[4.5rem]')

  const btnCss = clsx('px-28', 'mx-auto', 'f-center', 'font-normal')

  return (
    <Crate>
      <Crate.Inner customCss={innerCss} hasDots hasXBorder hasTopBorder>
        {/* Title */}
        <section className="section-title">DISTRIBUTED HISTORY</section>

        {/* History */}

        <LinkButton customCss={btnCss} color="dim" to="/claim">
          Claim
        </LinkButton>
      </Crate.Inner>
    </Crate>
  )
}

export default History
