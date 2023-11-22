import type React from 'react'

import Crate from '~/components/Crate'
import IconSlash from '~/components/Icons/Slash'
import ImgHarbergerTax from '~/components/Images/HarbergerTax'
import ImgInvestment from '~/components/Images/Investment'
import ImgMarketplace from '~/components/Images/Marketplace'
import Title from '~/components/Title'

interface ItemProps {
  children: React.ReactNode
}

const Item = ({ children }: ItemProps) => {
  return (
    <Crate
      color="dim"
      innerClass="px-4 py-6 lg:px-28 lg:py-10 border-b-green"
      hasDots
    >
      <section className="grid grid-cols-1 md:grid-cols-3 md:gap-x-10">
        {children}
      </section>
    </Crate>
  )
}

const News = () => {
  return (
    <>
      <Crate color="dim" innerClass="h-16" hasDots></Crate>

      {/* Title */}
      <Crate color="dim" innerClass="py-4 border-y-green" hasDots>
        <Title otherClass="flex-center">
          <span className="hidden lg:block text-green">003</span>
          <IconSlash className="hidden lg:block w-[350px] h-[29px]" />
          WHAT'S NEW
          <span className="text-light-green">&nbsp;& WHY</span>
        </Title>
      </Crate>

      {/* Marketplace */}
      <Item>
        <section className="col-span-1 flex-center">
          <ImgMarketplace className="w-[311px] h-[234px] lg:w-[376px] lg:h-[284px]" />
        </section>
        <section className="col-span-2 flex flex-col justify-center">
          <h3 className="text-20 lg:text-28 font-bold">
            An openly and transparently billboard NFT marketplace
          </h3>
          <span className="mt-3 lg:mt-6 text-14 lg:text-20">
            Transform the billboard space into a blockchain-based NFT
            marketplace where anyone can openly and transparently trade with
            full public visibility.
          </span>
        </section>
      </Item>

      {/* Investment */}
      <Item>
        <section className="col-span-1 flex-center lg:order-last">
          <ImgInvestment className="w-[311px] h-[234px] lg:w-[376px] lg:h-[284px]" />
        </section>
        <section className="col-span-2 flex flex-col justify-center">
          <h3 className="text-20 lg:text-28 font-bold">
            Purchasing billboards is no longer just a consumer behavior but an
            investment in attention economy assets
          </h3>
          <span className="mt-3 lg:mt-6 text-14 lg:text-20">
            Trade billboard NFTs and profit when sold at higher prices;
            revenue-sharing models reward and incentivize content creators,
            developers, and contributors to build a better content ecosystem
            collectively.
          </span>
        </section>
      </Item>

      {/* Harberger Tax */}
      <Item>
        <section className="col-span-1 flex-center">
          <ImgHarbergerTax className="w-[311px] h-[234px] lg:w-[376px] lg:h-[284px]" />
        </section>
        <section className="col-span-2 flex flex-col justify-center">
          <h3 className="text-20 lg:text-28 font-bold">
            Every billboard NFT is continuously auctioned under the Harberger
            Tax
          </h3>
          <span className="mt-3 lg:mt-6 text-14 lg:text-20">
            Harberger Tax governs the billboard NFT to utilize market
            competition to price and monetizes billboard spaces efficiently.
          </span>
        </section>
      </Item>
    </>
  )
}

export default News
