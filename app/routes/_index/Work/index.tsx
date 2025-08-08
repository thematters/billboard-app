import clsx from 'clsx'

import Box from '@components/Box'
import SideCarousel from '@components/Carousel/Side'
import RolesMDSvg from '@components/Svg/RolesMD'
import RolesSMSvg from '@components/Svg/RolesSM'

import Role from './Role'

const Work = () => {
  const baseCss = clsx('main-min-max mx-auto py-10 md:py-24')
  const titleCss = clsx('section-title')
  const rolesCss = clsx(
    'mt-12 grid grid-cols-1 md:grid-cols-[repeat(13,1fr)] gap-x-20'
  )
  const sketchCss = clsx('md:col-span-8')
  const svgMdCss = clsx('hidden md:block')
  const svgSmCss = clsx('block md:hidden')
  const contentCss = clsx('mt-8 md:mt-0 md:col-span-5 md:f-row-cc')

  return (
    <Box classes={baseCss}>
      <h1 className={titleCss}>How It Works</h1>
      <section className={rolesCss}>
        <div className={sketchCss}>
          <RolesMDSvg classes={svgMdCss} width="100%" height="100%" />
          <RolesSMSvg classes={svgSmCss} width="100%" height="100%" />
        </div>
        <div className={contentCss}>
          <SideCarousel>
            <Role classes="embla__slide" num={1}>
              <h5>Advertiser</h5>
              <p>
                Advertisers can reach targeted audiences by using billboard in
                specific communities, apps, or websites, and they earn a profit
                whenever another advertiser wins the same billboard at a higher
                bid.
              </p>
            </Role>
            <Role classes="embla__slide" num={2}>
              <h5>Billboard</h5>
              <p>
                The mechanism of transforming platform traffic into an NFT
                auction model based on Harberger Tax, generating platform tax
                revenue.
              </p>
            </Role>
            <Role classes="embla__slide" num={3}>
              <h5>Treasury</h5>
              <p>
                Treasury is the tax revenue generated during the billboard
                auction process. This portion of funds will be distributed to
                creators using a quadratic funding model.
              </p>
            </Role>
          </SideCarousel>
        </div>
      </section>
    </Box>
  )
}

export default Work
