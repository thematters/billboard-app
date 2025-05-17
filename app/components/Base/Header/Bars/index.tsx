import clsx from 'clsx'

import BarsSvg from '@components/Svg/Bars'
import useDrawer from '@hooks/useDrawer'

const Bars = () => {
  const { open } = useDrawer()
  const click = () => open('menu')

  const baseCss = clsx('ml-6 f-row-cc cursor-pointer block ml:hidden')

  return (
    <button className={baseCss} onClick={click}>
      <BarsSvg />
    </button>
  )
}

export default Bars
