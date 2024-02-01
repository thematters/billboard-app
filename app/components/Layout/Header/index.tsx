import Crate from '~/components/Crate'

import clsx from 'clsx'

const Header = () => {
  const css = clsx('f-center-between')

  return (
    <header>
      <Crate hasBottomBorder>
        <Crate.Inner>
          <section className={css}>
            <section>A</section>
            <section>B</section>
          </section>
        </Crate.Inner>
      </Crate>
    </header>
  )
}

export default Header
