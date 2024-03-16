import clsx from 'clsx'

import Crate from '@component/Crate'

import Event from './Event'

const Road = () => {
  const crateCss = clsx('px-4 lg:px-0', 'bg-black')
  const innerCss = clsx('px-4 lg:px-0', 'py-10 lg:py-[4.5rem]', 'bg-black')
  const titleCss = clsx('section-title', 'lg:mb-16', 'text-beige')
  const listCss = clsx('grid grid-cols-1 lg:grid-cols-10', 'gap-x-10')

  return (
    <Crate css={crateCss} hasXSpacing={false}>
      <Crate.Inner css={innerCss} hasXSpacing={false}>
        <section className={titleCss}>ROADMAP & MILESTONE</section>
        <section className={listCss}>
          <Event css="lg-shown" isThick />
          <Event css="col-span-2" isChecked hasChecker>
            Facilitate billboard trading and allocate tax revenue.
          </Event>
          <Event css="col-span-2" hasChecker>
            Implement open bidding to enable anyone to trade billboard NFTs.
          </Event>
          <Event css="col-span-2" hasChecker>
            Empower creators to create their own NFT billboards.
          </Event>
          <Event css="col-span-2" hasChecker>
            Expand the adoption of this protocol across a diverse range of
            applications.
          </Event>
          <Event css="lg-shown" />
        </section>
      </Crate.Inner>
    </Crate>
  )
}

export default Road
