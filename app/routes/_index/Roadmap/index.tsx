import type React from 'react'

import Crate from '~/components/Crate'
import Title from '~/components/Title'

interface EventProps {
  children?: React.ReactNode
  otherClass?: string
  position?: 'first' | 'middle' | 'last'
  title?: string
  isBold?: boolean
  isChecked?: boolean
  hasCircle?: boolean
}

const Event = ({
  children,
  otherClass,
  position,
  title,
  isBold,
  isChecked,
  hasCircle,
}: EventProps) => {
  const bold = [
    "before:bg-black before:content-[''] before:absolute",
    // sm ~ md
    'before:w-[3px] before:h-[calc(100%+3px)] before:top-0 before:left-[11px]',
    // lg
    'lg:before:w-[calc(100%+40px)] lg:before:h-[3px] lg:before:top-[11px] lg:before:left-0',
  ].join(' ')

  const circle = [
    'after:bg-no-repeat	after:bg-center after:bg-auto',
    "after:content-[''] after:absolute after:w-[24px] after:h-[24px]",
    'after:border-[3px] after:rounded-full',
    // sm ~ md
    'after:left-0 after:top-[3px]',
    // lg
    'lg:after:top-0',
    isChecked
      ? "after:bg-black after:bg-[url('app/assets/check.png')]"
      : 'after:bg-beige',
  ].join(' ')

  const event = [
    'pb-10 pl-12 lg:pb-0 lg:pt-12 lg:pl-0 relative',
    position === 'first' ? bold : '',
    position === 'last' ? 'hidden lg:block' : '',
    hasCircle ? circle : '',
  ].join(' ')

  return (
    <section className={event}>
      <h5 className="text-20 font-semibold">{title}</h5>
      <p className="mt-2 text-18">{children}</p>
    </section>
  )
}

const Roadmap = () => {
  const timeline = [
    'relative',
    'grid grid-cols-1 lg:grid-cols-5 gap-x-10',
    "before:bg-black before:content-[''] before:absolute",
    // sm ~ md
    'before:w-[1px] before:h-full before:left-[12px]',
    // lg
    'lg:before:w-full lg:before:h-[1px] lg:before:top-[12px]',
  ].join(' ')

  return (
    <Crate
      color="light"
      outerClass="px-4 lg:px-0 lg:pb-24 rounded-2xl"
      innerClass="px-0 py-4"
    >
      {/* Title */}
      <Title otherClass="flex-center">
        ROADMAP & <br className="block lg:hidden" /> MILESTONE
      </Title>

      {/* Timeline */}
      <section className="mt-4 lg:mt-10 pl-4 md:pl-8 lg:pl-0">
        <section className={timeline}>
          <Event position="first" />
          <Event title="Open bidding" hasCircle isChecked>
            Open bidding and allow anyone to trade billboard NFTs
          </Event>
          <Event title="Mint the profile pages" hasCircle>
            Enable users to mint their profile pages into billboard NFTs to
            monetize
          </Event>
          <Event title="Revenue-sharing model" hasCircle>
            Implement a revenue-sharing model to reward community users
          </Event>
          <Event position="last" />
        </section>
      </section>
    </Crate>
  )
}

export default Roadmap
