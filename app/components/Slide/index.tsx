import type React from 'react'

import Arrow from '~/components/Icons/Arrow'

interface ContentProps {
  children: React.ReactNode
  title: string
  isActive: boolean
}

const Content = ({ children, title, isActive }: ContentProps) => {
  const outer = [
    'overflow-x-hidden',
    isActive ? 'h-full opacity-100' : 'h-0 opacity-0',
  ].join(' ')

  return (
    <section className={outer}>
      <h5 className="lg:text-28 text-light-green font-semibold">{title}</h5>
      <p className="mt-2 lg:mt-6 text-14 lg:text-18">{children}</p>
    </section>
  )
}

interface CrateProps {
  children?: React.ReactNode
  active: 'advertiser' | 'owner'
  click: (string) => void
}

const Crate = ({ children, active, click }: CrateProps) => {
  const arrow = 'w-[23px] h-[15px] lg:w-[45px] lg:h-[30px]'
  const arrowLeft = [
    arrow,
    'scale-x-[-1]',
    active === 'advertiser'
      ? 'opacity-20 cursor-default'
      : 'opacity-100 cursor-pointer',
  ].join(' ')

  const arrowRight = [
    arrow,
    'ml-10',
    active === 'owner'
      ? 'opacity-20 cursor-default'
      : 'opacity-100 cursor-pointer',
  ].join(' ')

  return (
    <section className="p-6 bg-black border-all-green rounded-3xl relative">
      {/* Content */}
      <section>{children}</section>

      {/* Buttons */}
      <section className="mt-4 lg:mt-6 h-10 lg:h-20 flex flex-row-reverse items-center">
        <section onClick={() => click('owner')}>
          <Arrow className={arrowRight} />
        </section>
        <section onClick={() => click('advertiser')}>
          <Arrow className={arrowLeft} />
        </section>
      </section>
    </section>
  )
}

export default { Crate, Content }
