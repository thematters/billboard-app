import { useState } from 'react'

import Crate from '~/components/Crate'
import IconTridentLeft from '~/components/Icons/TridentLeft'
import IconTridentRight from '~/components/Icons/TridentRight'
import ImgRoles from '~/components/Images/Roles'
import Slide from '~/components/Slide'
import Title from '~/components/Title'

const Work = () => {
  const [active, setActive] = useState('advertiser')

  const click = (value: string) => {
    if (active === value) {
      return
    }
    setActive(value)
  }

  return (
    <>
      <Crate color="dim" innerClass="h-16" hasDots />
      <Crate color="dim" innerClass="h-7 lg:h-10 !border-0" hasDots />

      {/* Title */}
      <Crate color="dim" innerClass="!px-0" hasDots>
        <Title otherClass="flex-center-between text-light-green">
          <IconTridentLeft width={29} height={40} />
          HOW IT WORKS
          <IconTridentRight width={29} height={40} />
        </Title>
      </Crate>

      <Crate color="dim" innerClass="h-7 lg:h-10 !border-0" hasDots />

      {/* Roles */}
      <Crate color="dim" innerClass="py-5 lg:px-28 lg:py-10" hasDots>
        <section className="grid grid-cols-1 lg:grid-cols-2">
          <section className="flex-center">
            <ImgRoles
              className="w-[308px] h-[287px] md:w-[476px] md:h-[439px] lg:w-[584px] lg:h-[476px]"
              active={active}
              click={click}
            />
          </section>
          <section className="lg:pl-10 lg:py-14 flex-center">
            <Slide.Crate active={active} click={click}>
              <Slide.Content
                title="Advertisers"
                isActive={active === 'advertiser'}
              >
                Advertisers can reach targeted audiences by using billboard
                space in specific communities, apps, or profiles. They can trade
                ad space directly via growing DeFi infrastructure and profit
                when sold at higher prices.
              </Slide.Content>
              <Slide.Content title="Space Owner" isActive={active === 'owner'}>
                Communities owning ad space can direct income to smart contracts
                collectively managed by the community, enabling revenue sharing
                to reward and incentivize developers, creators, and
                contributors.
              </Slide.Content>
            </Slide.Crate>
          </section>
        </section>
      </Crate>
    </>
  )
}

export default Work
