import type React from 'react'

import { NavLink } from '@remix-run/react'

import IconChevron from '~/components/Icons/Chevron'
import IconDiscord from '~/components/Icons/Discord'
import IconFacebook from '~/components/Icons/Facebook'
import IconInstagram from '~/components/Icons/Instagram'
import IconLinkedin from '~/components/Icons/Linkedin'
import IconMail from '~/components/Icons/Mail'
import IconMatters from '~/components/Icons/Matters'
import IconWhitepaper from '~/components/Icons/Whitepaper'
import IconX from '~/components/Icons/X'

interface FooterIconProps {
  children: React.ReactNode
}

const FooterIcon = ({ children }: FooterIconProps) => {
  return (
    <section className="p-1 md:p-2.5 bg-light-green rounded-lg">
      {children}
    </section>
  )
}

interface SocialButtonProps {
  children: React.ReactNode
  to: string
}

const SocialButton = ({ children, to }: SocialButtonProps) => {
  return (
    <NavLink className="shrink-0" to={to} target="_blank">
      {children}
    </NavLink>
  )
}

const Footer = () => {
  const footerIconSize = { width: 24, height: 24 }
  const socialIconSize = { width: 40, height: 40 }

  const outer = [
    'relative',
    'px-4 sm:px-8 lg:px-24 xl:px-40 py-10 lg:py-14',
    'border-t border-green',
    'grid grid-cols-2 lg:grid-cols-3 md:gap-x-20',
  ].join(' ')

  const divider = [
    'w-[1px] md:h-full lg:h-full',
    'absolute -left-10 bg-beige opacity-60',
  ].join(' ')

  const social = [
    'relative',
    'mt-6 lg:mt-0 pt-6 lg:pt-0',
    'col-span-2 lg:col-span-1 grid grid-cols-1',
    'border-t border-beige border-opacity-60 lg:border-0',
  ].join(' ')

  return (
    <footer className={outer}>
      {/* Contact */}
      <section>
        <NavLink
          className="flex-center-start md:items-center"
          to="mailto:hi@matters.town"
        >
          <FooterIcon>
            <IconMail {...footerIconSize} />
          </FooterIcon>
          <section className="pl-4 grow">
            <section className="text-sm md:text-base text-light-green md:flex-center-between">
              Contact Us
              <IconChevron className="hidden md:block" {...footerIconSize} />
            </section>
            <p className="mt-1 hidden md:block text-xs text-beige text-opacity-60">
              Email us to get involved
            </p>
          </section>
        </NavLink>
      </section>

      {/* Whitepaper */}
      <section className="relative">
        <section className={divider} />
        <NavLink
          className="flex-center-start md:items-center"
          to="/"
          target="_blank"
        >
          <FooterIcon>
            <IconWhitepaper {...footerIconSize} />
          </FooterIcon>
          <section className="pl-4 grow">
            <section className="text-sm md:text-base text-light-green md:flex-center-between">
              White Paper
              <IconChevron className="hidden md:block" {...footerIconSize} />
            </section>
            <p className="mt-1 hidden md:block text-xs text-beige text-opacity-60">
              Get more information
            </p>
          </section>
        </NavLink>
      </section>

      {/* Socials */}
      <section className={social}>
        <section className={divider} />
        <section className="sm:px-20 md:px-44 lg:px-0 flex-center-between">
          <SocialButton to="https://twitter.com/Mattersw3b">
            <IconX {...socialIconSize} />
          </SocialButton>
          <SocialButton to="https://discord.com/invite/matterslab">
            <IconDiscord {...socialIconSize} />
          </SocialButton>
          <SocialButton to="https://www.facebook.com/MattersLab2018/">
            <IconFacebook {...socialIconSize} />
          </SocialButton>
          <SocialButton to="https://matters-lab.io/">
            <IconMatters {...socialIconSize} />
          </SocialButton>
          <SocialButton to="https://www.instagram.com/matterslab2018/">
            <IconInstagram {...socialIconSize} />
          </SocialButton>
          <SocialButton to="https://www.linkedin.com/company/matters-lab/">
            <IconLinkedin {...socialIconSize} />
          </SocialButton>
        </section>
        <section className="mt-4 text-12 text-light-grey flex-center lg:flex-center-start">
          © Powered by Matters Lab
        </section>
      </section>
    </footer>
  )
}

export default Footer
