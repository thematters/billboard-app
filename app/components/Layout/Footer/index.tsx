import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import Crate from '@components/Crate'
import { MAIL } from '@constants'
import SvgChevron from '@svgs/Chevron'
import SvgDiscord from '@svgs/Discord'
import SvgFacebook from '@svgs/Facebook'
import SvgInstagram from '@svgs/Instagram'
import SvgLinkedin from '@svgs/Linkedin'
import SvgMatters from '@svgs/Matters'
import SvgX from '@svgs/X'

import FooterIcon from './FooterIcon'
import FooterItem from './FooterItem'
import SocialItem from './SocialItem'

const Footer = () => {
  const innerCss = clsx('lg:py-15 py-10')

  const baseCss = clsx(
    'max-limit',
    'grid grid-cols-2 lg:grid-cols-3',
    'gap-x-6 md:gap-x-20'
  )

  const dividerCss = clsx(
    'my-6 lg:my-0',
    'border-t border-beige',
    'opacity-50',
    'col-span-2',
    'lg-hidden'
  )

  const socialCss = clsx('f-center-between md:f-center lg:f-center-between')

  const licenseCss = clsx(
    'mt-4',
    't-12',
    'text-steam',
    'text-center lg:text-left'
  )

  return (
    <footer>
      <Crate hasTopBorder>
        <Crate.Inner css={innerCss}>
          <section className={baseCss}>
            {/* Contact */}
            <FooterItem
              to={MAIL}
              type="mail"
              title="Contact Us"
              desc="Email us to own your Billboards"
            />

            {/* Whitepaper */}
            <FooterItem
              to="/"
              type="paper"
              title="White Paper"
              desc="Click to get more information"
            />

            {/* Divider */}
            <section className={dividerCss} />

            {/* Socials */}
            <section className="col-span-2 lg:col-span-1">
              <section className={socialCss}>
                <SocialItem to="https://twitter.com/Mattersw3b">
                  <SvgX />
                </SocialItem>
                <SocialItem to="https://discord.com/invite/matterslab">
                  <SvgDiscord />
                </SocialItem>
                <SocialItem to="https://www.facebook.com/MattersLab2018/">
                  <SvgFacebook />
                </SocialItem>
                <SocialItem to="https://matters-lab.io/">
                  <SvgMatters />
                </SocialItem>
                <SocialItem to="https://www.instagram.com/matterslab2018/">
                  <SvgInstagram />
                </SocialItem>
                <SocialItem to="https://www.linkedin.com/company/matters-lab/">
                  <SvgLinkedin />
                </SocialItem>
              </section>
              <section className={licenseCss}>
                © Powered by Matters Lab
              </section>
            </section>
          </section>
        </Crate.Inner>
      </Crate>
    </footer>
  )
}

export default Footer
