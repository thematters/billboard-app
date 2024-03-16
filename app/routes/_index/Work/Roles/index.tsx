import clsx from 'clsx'
import { useState } from 'react'

import Crate from '@component/Crate'
import Slide from '@component/Slide'
import SvgRoles from '@svg/Roles'

const Roles = () => {
  const names = ['advertiser', 'billboard', 'tax', 'treasury', 'funding']

  const [role, setRole] = useState(names[0])

  const click = (value: string | null) => {
    if (!value || value === role) {
      return
    }
    setRole(value)
  }

  const baseCss = clsx(
    'mt-10',
    'grid grid-cols-1 lg:grid-cols-2',
    'gap-x-0 lg:gap-x-10',
    'gap-y-10 lg:gap-y-0'
  )
  const svgCss = clsx(
    'h-[253px] w-[311px]',
    'md:h-full md:w-full',
    'max-h-[476px] max-w-[584px]',
    'm-auto'
  )

  return (
    <section className={baseCss}>
      {/* Roles Illustration */}
      <SvgRoles css={svgCss} width="100%" height="100%" click={click} />

      {/* Explanation */}
      <Slide css="m-auto" current={role} items={names} click={click}>
        <Slide.Content title="Advertiser" isActive={role === names[0]}>
          Advertisers can reach targeted audiences by using billboard space in
          specific communities, apps, or profiles. They can trade ad space
          directly via growing DeFi infrastructure and profit when sold at
          higher prices.
        </Slide.Content>

        <Slide.Content title="Billboard" isActive={role === names[1]}>
          The mechanism of transforming platform traffic into an NFT auction
          model based on Harberger Tax, generating platform tax revenue.
        </Slide.Content>

        <Slide.Content title="Harberger Tax" isActive={role === names[2]}>
          <section>
            Harberger Tax is a market-based mechanism discussed in Radical
            Markets, and Property Is Only Another Name for Monopoly. It aims to
            efficiently distribute public resources, combining fairness and
            efficiency through partial common ownership. Under Harberger Tax,
            asset ownership is fluid, favoring holders who can maximize its
            value. Generally, the Harberger Tax can be summarized in two rules:
            1. People can freely set prices for their assets and pay property
            tax based on the set price. 2. Anyone can buy assets at any time if
            the bid price exceeds the set price. Temporary owners must actively
            set higher prices for their assets to extend ownership duration and
            reduce the risk of being outbid by other participants in the market.
          </section>
        </Slide.Content>

        <Slide.Content title="Treasury" isActive={role === names[3]}>
          Treasury is the tax revenue generated during the billboard auction
          process. This portion of funds will be distributed to creators using a
          quadratic funding model.
        </Slide.Content>

        <Slide.Content title="Quadratic Funding" isActive={role === names[4]}>
          Quadratic funding is a democratic crowdfunding mechanism promoting
          fair and inclusive public goods funding. It combines modest individual
          contributions with more considerable matching sums from sponsors or
          contributors. Each donor's contribution is matched by the total amount
          generated, the number of distinct contributors, and the total amount
          donated. It was proposed by Vitalik Buterin, Zoë Hitzig, and E. Glen
          Weyl in their paper.
        </Slide.Content>
      </Slide>
    </section>
  )
}

export default Roles
