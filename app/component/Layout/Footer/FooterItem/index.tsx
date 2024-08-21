import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'

import SvgChevron from '@svg/Chevron'

import FooterIcon from '../FooterIcon'

type Props = ComponentProps & {
  to: string
  type: 'mail' | 'paper'
  title: string
  desc: string
}

const FooterItem = ({ children, css, to, type, title, desc }: Props) => {
  const baseCss = 'relative f-center lg:f-start'
  const itemCss = 'pl-4 grow'
  const titleCss = 't-14 md:t-16 text-grass md:f-center-between'
  const descCss = 'mt-1 t-12 text-beige/60 md-shown'
  const dividerCss = 'absolute -right-10 w-px md:h-full bg-beige/30'

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
