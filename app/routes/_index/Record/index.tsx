import clsx from 'clsx'

import ButtonLink from '@component/Button/Link'
import Crate from '@component/Crate'

const Record = () => {
  const innerCss = clsx('py-10 lg:py-[4.5rem]')
  const btnCss = clsx('px-28', 'mx-auto', 'f-center', 'font-normal')

  return (
    <Crate>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasTopBorder>
        {/* Title */}
        <section className="section-title">DISTRIBUTED HISTORY</section>

        {/* History */}

        <ButtonLink css={btnCss} color="dim" to="/claim">
          Claim
        </ButtonLink>
      </Crate.Inner>
    </Crate>
  )
}

export default Record
