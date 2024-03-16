import { NavLink } from '@remix-run/react'

import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgLink from '@svg/Link'

import Basic from './Basic'
import Auction from './Auction'

type Props = {
  data: Record<string, any>
}

const Meta = ({ data }: Props) => {
  const baseCss = clsx(
    'p-4 md:p-5',
    'bg-dim',
    'border',
    'border-green',
    'rounded-[20px]',
    'grid grid-cols-1 md:grid-cols-2',
    'gap-x-16'
  )

  return (
    <section className={baseCss}>
      {/* left - basic */}
      <Basic board={data.board} />

      {/* right - auction and other info */}
      <Auction data={data} />
    </section>
  )
}

export default Meta
