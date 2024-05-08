import { NavLink } from '@remix-run/react'

import clsx from 'clsx'

import SvgLink from '@svg/Link'

type Props = {
  board: Record<string, any>
}

const Meta = ({ board }: Props) => {
  const { contentURI, name, location } = board

  const baseCss = clsx('grid grid-cols-1', 'gap-y-4')
  const imgCss = clsx('h-auto', 'w-full', 'rounded-2xl')
  const nameCss = clsx('t-16 md:t-28', 'font-semibold md:font-bold', 'one-line')
  const locationCss = clsx(
    'mt-1',
    't-12 md:t-14',
    'text-grass',
    'font-normal',
    'f-center-start'
  )
  const linkCss = clsx('ml-2', 'md:font-medium', 'f-center-start')
  const svgLinkCss = clsx('ml-1', 'w-2 md:w-[14px]')

  return (
    <section className={baseCss}>
      <img className={imgCss} src={contentURI} />
      <section>
        <p className={nameCss}>{name}</p>
        <p className={locationCss}>
          Board Location:
          <NavLink className={linkCss} to={location} target="_blank">
            Discover Page
            <SvgLink css={svgLinkCss} />
          </NavLink>
        </p>
      </section>
    </section>
  )
}

export default Meta
