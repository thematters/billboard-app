import clsx from 'clsx'
import { Link } from '@remix-run/react'

import LogoSvg from '@components/Svg/Logo'
import NameSvg from '@components/Svg/Name'

const Logo = () => {
  const baseCss = clsx('block flc')
  const logoCss = clsx('size-9 md:size-10')
  const nameCss = clsx('ml-3 hidden md:block')

  return (
    <Link className={baseCss} to="/">
      <LogoSvg classes={logoCss} />
      <NameSvg classes={nameCss} />
    </Link>
  )
}

export default Logo
