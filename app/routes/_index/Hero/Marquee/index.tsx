import clsx from 'clsx'

import BitSvg from '@components/Svg/AD/Bit'
import DevconSvg from '@components/Svg/AD/Devcon'
import FireflySvg from '@components/Svg/AD/Firefly'
import FoodaySvg from '@components/Svg/AD/Fooday'
import LinkeSvg from '@components/Svg/AD/Linke'
import NumbersSvg from '@components/Svg/AD/Numbers'
import SocialLayerSvg from '@components/Svg/AD/SocialLayer'

type PropsType = {
  classes?: string
}

const Marquee = ({ classes }: PropsType) => {
  const baseCss = clsx('relative overflow-x-hidden', classes)
  const listCss = clsx(
    'grid grid-flow-col auto-cols-max gap-x-20 md:gap-x-40 w-[200%]',
    'animate-marquee-20s md:animate-marquee-50s'
  )

  return (
    <div className={baseCss}>
      <div className={listCss}>
        {/* duplicate on purpose for marquee */}
        <FoodaySvg opacity={0.5} />
        <SocialLayerSvg opacity={0.5} />
        <FireflySvg opacity={0.5} />
        <LinkeSvg opacity={0.5} />
        <BitSvg opacity={0.5} />
        <NumbersSvg opacity={0.5} />
        <DevconSvg opacity={0.5} />
        <FoodaySvg opacity={0.5} />
        <SocialLayerSvg opacity={0.5} />
        <FireflySvg opacity={0.5} />
        <LinkeSvg opacity={0.5} />
        <BitSvg opacity={0.5} />
        <NumbersSvg opacity={0.5} />
        <DevconSvg opacity={0.5} />
      </div>
    </div>
  )
}

export default Marquee
