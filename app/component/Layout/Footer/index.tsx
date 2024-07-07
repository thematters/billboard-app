import { NavLink } from '@remix-run/react'

import Crate from '@component/Crate'
import { MAIL, PAPER_LINK } from '@constant'
import SvgChevron from '@svg/Chevron'
import SvgDiscord from '@svg/Discord'
import SvgFacebook from '@svg/Facebook'
import SvgInstagram from '@svg/Instagram'
import SvgLinkedin from '@svg/Linkedin'
import SvgMatters from '@svg/Matters'
import SvgX from '@svg/X'

import FooterIcon from './FooterIcon'
import FooterItem from './FooterItem'
import SocialItem from './SocialItem'

const Footer = () => {
  const innerCss = 'lg:py-15 py-10'
  const baseCss =
    'max-limit grid grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-20'
  const dividerCss =
    'my-6 lg:my-0 border-t border-beige opacity-50 col-span-2 lg-hidden'
  const socialCss = 'f-center-between md:f-center lg:f-center-between'
  const licenseCss = 'mt-4 t-12 text-steam text-center lg:text-left'

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
              to={PAPER_LINK}
              type="paper"
              title="Green Paper"
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
                <SocialItem to="https://www.instagram.com/matters.lab/">
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
