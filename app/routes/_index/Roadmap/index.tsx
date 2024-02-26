import clsx from 'clsx'

import Crate from '~/components/Crate'

import Event from './Event'

const Roadmap = () => {
  const crateCss = clsx('px-4 lg:px-0', 'bg-black')

  const innerCss = clsx('px-4 lg:px-0', 'py-10 lg:py-[4.5rem]', 'bg-black')

  const titleCss = clsx('section-title', 'lg:mb-16', 'text-beige')

  const listCss = clsx('grod-cols-1 grid lg:grid-cols-10', 'gap-x-10')

  const firstAndLastCss = clsx('hidden lg:block')

  return (
    <Crate customCss={crateCss} hasXSpacing={false}>
      <Crate.Inner customCss={innerCss} hasXSpacing={false}>
        <section className={titleCss}>ROADMAP & MILESTONE</section>
        <section className={listCss}>
          <Event customCss={firstAndLastCss} isThick />
          <Event customCss="col-span-2" isChecked hasChecker>
            Facilitate billboard trading and allocate tax revenue.
          </Event>
          <Event customCss="col-span-2" hasChecker>
            Implement open bidding to enable anyone to trade billboard NFTs.
          </Event>
          <Event customCss="col-span-2" hasChecker>
            Empower creators to create their own NFT billboards.
          </Event>
          <Event customCss="col-span-2" hasChecker>
            Expand the adoption of this protocol across a diverse range of
            applications.
          </Event>
          <Event customCss={firstAndLastCss} />
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Roadmap
