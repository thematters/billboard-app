import type { ComponentProps } from '~/types'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import SvgMail from '~/components/Svgs/Mail'
import SvgPaper from '~/components/Svgs/Paper'

type Props = ComponentProps & {
  type: 'mail' | 'paper'
}

const FooterIcon = ({ children, customCss, type }: Props) => {
  const css = clsx(
    'p-1 md:p-2.5',
    'w-fit',
    'bg-grass',
    'text-black',
    'rounded-lg'
  )
  return (
    <section className={css}>
      {type === 'mail' && <SvgMail />}
      {type === 'paper' && <SvgPaper />}
    </section>
  )
}

export default FooterIcon
