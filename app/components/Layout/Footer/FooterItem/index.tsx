import type { ComponentProps } from '~/types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgChevron from '~/components/Svgs/Chevron'

import FooterIcon from '../FooterIcon'

type Props = ComponentProps & {
  to: string
  type: 'mail' | 'paper'
  title: string
  desc: string
}

const FooterItem = ({ children, customCss, to, type, title, desc }: Props) => {
  const css = clsx('relative', 'f-center lg:f-start')

  const itemCss = clsx('pl-4', 'grow')

  const titleCss = clsx('t-14 md:t-16', 'text-grass', 'md:f-center-between')

  const descCss = clsx('mt-1', 't-12', 'text-beige', 'opacity-60', 'md-shown')

  const dividerCss = clsx(
    'absolute -right-10',
    'w-px md:h-full',
    'bg-beige opacity-30'
  )

  return (
    <NavLink className={css} to={to}>
      <FooterIcon type={type} />
      <section className={itemCss}>
        <section className={titleCss}>
          {title}
          <SvgChevron customCss="md-shown" />
        </section>
        <p className={descCss}>{desc}</p>
      </section>
      <section className={dividerCss} />
    </NavLink>
  )
}

export default FooterItem
