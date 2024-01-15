import { MAIL_TO } from '~/common/constants'
import LinkButton from '~/components/Buttons/LinkButton'
import Crate from '~/components/Crate'
import IconDown from '~/components/Icons/Down'
import Title from '~/components/Title'

const Action = () => {
  return (
    <Crate color="dim" innerClass="pt-10 grid grid-cols-1" hasDots>
      <section className="flex-center">
        <IconDown className="w-[17px] h-[58px] lg:w-[28px] lg:h-[97px] " />
      </section>
      <Title otherClass="mt-6 lg:mt-10 text-center text-light-green">
        NOW, <br /> CREATE YOUR <br className="block sm:hidden" /> FIRST AD
      </Title>
      <section className="mt-4 lg:px-20 text-14 lg:text-18">
        Social media platforms have become heavily reliant on the online
        advertising industry. The prevailing model, labeled "attention economy",
        transforms user attention into a commodity within vertically integrated
        social media companies.
      </section>
      <section className="mt-6 mb-14 lg:mt-16 lg:mb-24 flex-center">
        <LinkButton color="dim" otherClass="w-[272px] h-[59px]" to={MAIL_TO}>
          Contact Us
        </LinkButton>
      </section>
    </Crate>
  )
}

export default Action
