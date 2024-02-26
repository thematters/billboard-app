import clsx from 'clsx'

import LinkButton from '~/components/Buttons/Link'
import Crate from '~/components/Crate'

const History = () => {
  const innerCss = clsx('py-10 lg:py-[4.5rem]')

  const btnCss = clsx('w-[272px]', 'mx-auto', 'f-center')

  return (
    <Crate>
      <Crate.Inner customCss={innerCss} hasDots hasXBorder hasTopBorder>
        {/* Title */}
        <section className="section-title">DISTRIBUTED HISTORY</section>

        {/* History */}

        <LinkButton customCss={btnCss} color="dim" to="/claim">
          CLAIM
        </LinkButton>
      </Crate.Inner>
    </Crate>
  )
}

export default History
