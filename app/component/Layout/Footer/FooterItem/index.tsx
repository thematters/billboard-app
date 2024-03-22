import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgChevron from '@svg/Chevron'

import FooterIcon from '../FooterIcon'

type Props = ComponentProps & {
  to: string
  type: 'mail' | 'paper'
  title: string
  desc: string
}

const FooterItem = ({ children, css, to, type, title, desc }: Props) => {
  const baseCss = clsx('relative', 'f-center lg:f-start')
  const itemCss = clsx('pl-4', 'grow')
  const titleCss = clsx('t-14 md:t-16', 'text-grass', 'md:f-center-between')
  const descCss = clsx('mt-1', 't-12', 'text-beige/60', 'md-shown')
  const dividerCss = clsx('absolute -right-10', 'w-px md:h-full', 'bg-beige/30')

  return (
    <NavLink className={baseCss} to={to} target="_blank">
      <FooterIcon type={type} />
      <section className={itemCss}>
        <section className={titleCss}>
          {title}
          <SvgChevron css="md-shown" />
        </section>
        <p className={descCss}>{desc}</p>
      </section>
      <section className={dividerCss} />
    </NavLink>
  )
}

export default FooterItem
