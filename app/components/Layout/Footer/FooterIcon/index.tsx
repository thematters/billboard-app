import type { ComponentProps } from '@types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgMail from '@svgs/Mail'
import SvgPaper from '@svgs/Paper'

type Props = ComponentProps & {
  type: 'mail' | 'paper'
}

const FooterIcon = ({ children, css, type }: Props) => {
  const baseCss = clsx(
    'p-1 md:p-2.5',
    'w-fit',
    'bg-grass',
    'text-black',
    'rounded-lg'
  )
  return (
    <section className={baseCss}>
      {type === 'mail' && <SvgMail />}
      {type === 'paper' && <SvgPaper />}
    </section>
  )
}

export default FooterIcon
