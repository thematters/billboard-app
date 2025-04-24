import clsx from 'clsx'

import BarsSvg from '@components/Svg/Bars'
import useDrawer from '@hooks/useDrawer'

const Bars = () => {
  const { open } = useDrawer()

  const baseCss = clsx('ml-6 fcc cursor-pointer block ml:hidden')

  return (
    <button className={baseCss} onClick={() => open('menu')}>
      <BarsSvg />
    </button>
  )
}

export default Bars
