import clsx from 'clsx'

import EmptyBoxSvg from '@components/Svg/EmptyBox'

const EmptyRow = () => {
  const textCss = clsx(
    'my-10 f-row-cc text-base md:text-xl text-gray-30 text-center'
  )
  const svgCss = clsx('mx-auto')

  return (
    <>
      <p className={textCss}>
        There appear to be no new rewards available to claim.
      </p>
      <EmptyBoxSvg classes={svgCss} />
    </>
  )
}

export default EmptyRow
