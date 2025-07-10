import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import DiscordSvg from '@components/Svg/Discord'
import FacebookSvg from '@components/Svg/Facebook'
import InstagramSvg from '@components/Svg/Instagram'
import LinkedinSvg from '@components/Svg/Linkedin'
import MattersSvg from '@components/Svg/Matters'
import FacebookSvg from '@components/Svg/Facebook'
import XSvg from '@components/Svg/X'

const Contact = () => {
  const baseCss = clsx('col-span-3 lg:col-span-1')
  const iconsCss = clsx(
    'f-row-cb text-black max-w-[343px] mx-auto lg:max-w-none'
  )
  const textCss = clsx(
    'mt-2 text-sm text-gray-50 font-normal text-center lg:text-left'
  )

  return (
    <section className={baseCss}>
      <div className={iconsCss}>
        <NavLink to="https://twitter.com/Mattersw3b" target="_blank">
          <XSvg />
        </NavLink>
        <NavLink to="https://discord.com/invite/matterslab" target="_blank">
          <DiscordSvg />
        </NavLink>
        <NavLink to="https://www.facebook.com/MattersLab2018/" target="_blank">
          <FacebookSvg />
        </NavLink>
        <NavLink to="https://matters-lab.io/" target="_blank">
          <MattersSvg />
        </NavLink>
        <NavLink to="https://www.instagram.com/matters.lab/" target="_blank">
          <InstagramSvg />
        </NavLink>
        <NavLink
          to="https://www.linkedin.com/company/matters-lab/"
          target="_blank"
        >
          <LinkedinSvg />
        </NavLink>
      </div>
      <p className={textCss}>© Powered by Matters Lab</p>
    </section>
  )
}

export default Contact
