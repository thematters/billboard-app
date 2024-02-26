import clsx from 'clsx'

import SvgCross from '~/components/Svgs/Cross'

const Decorator = () => {
  const css = clsx('px-2', 'pt-6', 'f-center-between', 'text-green')

  const lineCss = clsx('mx-4', 'w-full', 'b-t-green')

  return (
    <section className={css}>
      <SvgCross />
      <div className={lineCss} />
      <SvgCross />
    </section>
  )
}

export default Decorator
