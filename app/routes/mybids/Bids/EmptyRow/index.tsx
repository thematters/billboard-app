import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import ChevronSvg from '@components/Svg/Chevron'
import EmptyBoxSvg from '@components/Svg/EmptyBox'
import useAppEnv from '@hooks/useAppEnv'

const EmptyRow = () => {
  const { tokenIdShowCase } = useAppEnv()

  const linkCss = clsx(
    'my-10 f-row-cc gap-x-2 text-base md:text-xl text-gray-30 hover:text-white text-center',
    'tranistion-all duration-500'
  )
  const svgCss = clsx('mx-auto')

  return (
    <>
      <NavLink
        className={linkCss}
        to={`/board/${tokenIdShowCase}`}
        target="_self"
      >
        It's still empty here. Go bid now
        <ChevronSvg width={22} height={22} />
      </NavLink>
      <EmptyBoxSvg classes={svgCss} />
    </>
  )
}

export default EmptyRow
