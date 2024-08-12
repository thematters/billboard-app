import Basic from './Basic'
import Auction from './Auction'

type Props = {
  data: Record<string, any>
}

const Meta = ({ data }: Props) => {
  const baseCss = 'cols-1 md:cols-2 gap-x-16'

  return (
    <section className={baseCss}>
      {/* board basic info */}
      <Basic board={data.board} />

      {/* auction info */}
      <Auction data={data} />
    </section>
  )
}

export default Meta
