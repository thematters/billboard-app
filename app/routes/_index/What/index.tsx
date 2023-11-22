import Crate from '~/components/Crate'
import ImgBook from '~/components/Images/Book'
import Title from '~/components/Title'

const What = () => {
  return (
    <Crate
      color="light"
      outerClass="rounded-2xl"
      innerClass="py-4 grid grid-cols-1 gap-y-6"
    >
      <Title otherClass="flex-center">WHAT</Title>
      <section className="text-14 lg:text-20">
        An open protocol designed to migrate social media to the decentralized
        blockchain, enabling transparent, competitive, and accountable
        ecosystems, empowering user ownership -
        <b>we leverage decentralization to architect a new attention economy</b>
        .
      </section>
      <section className="py-4 flex-center">
        <ImgBook className="w-[311px] h-[94px] lg:w-[896px] lg:h-[270px]" />
      </section>
    </Crate>
  )
}

export default What
