import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import ChevronRightSvg from '@components/Svg/ChevronRight'
import SlimCheckSvg from '@components/Svg/SlimCheck'

type PropsType = {
  icon: React.ReactNode
  color: 'green' | 'purple' | 'blue'
  title: string
  items: Array<string>
  to: string
}

const Row = ({ icon, color, title, items, to }: PropsType) => {
  const baseCss = clsx(
    'p-0 md:p-5 grid grid-cols-1 md:grid-cols-[auto_1fr] md:gap-x-8'
  )
  const iconCss = clsx('mx-auto')
  const contentCss = clsx('mt-4 md:mt-0')
  const headCss = clsx(
    'f-row-cb text-base md:text-[28px] font-semibold md:font-medium',
    `text-${color}-10`
  )
  const linkCss = clsx(
    'f-row-cc rounded-full size-8 md:size-[42px] border border-gray-80 cursor-pointer',
    `stroke-${color}-10`
  )
  const itemCss = clsx('mt-4 grid grid-cols-[auto_1fr] gap-x-2 gap-y-1')
  const checkCss = clsx(`size-[22px] md:size-6 text-${color}-10`)
  const textCss = clsx('text-sm md:text-xl text-gray-10 font-normal')

  return (
    <section className={baseCss}>
      <div className={iconCss}>{icon}</div>

      <div className={contentCss}>
        <div className={headCss}>
          <h5>{title}</h5>
          <NavLink className={linkCss} to={to} target="_blank">
            <ChevronRightSvg width={18} height={18} opacity={1} />
          </NavLink>
        </div>
        {items.map((d: string, idx: number) => (
          <div key={idx} className={itemCss}>
            <SlimCheckSvg classes={checkCss} />
            <div className={textCss}>{d}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Row
