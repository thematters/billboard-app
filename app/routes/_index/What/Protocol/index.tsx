import clsx from 'clsx'

import SvgProtocol from '@svg/Protocol'

const Protocol = () => {
  const baseCss = clsx(
    'mt-4 md:mt-10',
    'mb-10',
    'grid grid-cols-1 md:grid-cols-3 ',
    'gap-x-0 md:gap-x-10',
    'gap-y-10'
  )
  const svgCss = clsx(
    'h-[235px] w-[311px]',
    'md:h-full md:w-full',
    'f-center',
    'mx-auto',
    'md:order-last'
  )
  const descCss = clsx('col-span-2', 'f-col-center', 'mt-6 lg:my-10')
  const h4Css = clsx('t-20 lg:t-28', 'font-bold')
  const pCss = clsx('t-14 lg:t-20', 'mt-6')

  return (
    <section className={baseCss}>
      <SvgProtocol css={svgCss} width="auto" height="auto" />
      <section className={descCss}>
        <h4 className={h4Css}>
          A protocol within an open network that allows for seamless integration
          with a wide range of applications.
        </h4>
        <p className={pCss}>
          This on-chain billboard protocol can be easily integrated into various
          applications, enabling more direct monetization methods and promoting
          fairer distribution.
        </p>
      </section>
    </section>
  )
}

export default Protocol
