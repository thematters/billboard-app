import clsx from 'clsx'

import DiscordSvg from '@components/Svg/Discord'
import FacebookSvg from '@components/Svg/Facebook'
import InstagramSvg from '@components/Svg/Instagram'
import LinkedinSvg from '@components/Svg/Linkedin'
import MattersSvg from '@components/Svg/Matters'
import XSvg from '@components/Svg/X'

const Contact = () => {
  const iconCss = clsx('f-row-cb')
  const textCss = clsx('mt-6 f-row-cc text-xs text-gray-50')

  return (
    <section>
      <section className={iconCss}>
        <a href="https://twitter.com/Mattersw3b" target="_blank">
          <XSvg />
        </a>
        <a href="https://discord.com/invite/matterslab" target="_blank">
          <DiscordSvg />
        </a>
        <a href="https://www.facebook.com/MattersLab2018/" target="_blank">
          <FacebookSvg />
        </a>
        <a href="https://matters-lab.io/" target="_blank">
          <MattersSvg />
        </a>
        <a href="https://www.instagram.com/matters.lab/" target="_blank">
          <InstagramSvg />
        </a>
        <a href="https://www.linkedin.com/company/matters-lab/" target="_blank">
          <LinkedinSvg />
        </a>
      </section>
      <p className={textCss}>© Powered by Matters Lab</p>
    </section>
  )
}

export default Contact
