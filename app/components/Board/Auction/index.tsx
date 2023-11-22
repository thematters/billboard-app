import BaseButton from '~/components/Buttons/BaseButton'
import IconBid from '~/components/Icons/Bid'

interface Props {
  outerClass?: string
  name: string
  bidPrice: number
  taxRate: number
  next: string
}

const Auction = ({ outerClass, name, bidPrice, taxRate, next }: Props) => {
  const outer = [
    'p-4 w-full bg-dim-black border-all-green rounded-[20px]',
    outerClass,
  ].join(' ')

  const hr = 'my-4 md:my-6 border-dashed border-t-1 border-green'

  const btn = [
    'w-[272px] h-[60px] bg-green border-green',
    'flex-center font-normal cursor-not-allowed',
  ].join(' ')

  const divider = [
    "before:content-[''] before:w-[1px] before:h-full",
    'before:absolute before:top-0 before:-left-6',
    'before:border-dashed before:border-l before:border-green',
  ].join(' ')

  return (
    <section className={outer}>
      <p className="text-white font-semibold md:text-28 md:font-bold">{name}</p>
      <hr className={hr} />
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0">
        <section>
          <p className="tetx-14 text-green lg:text-base">
            Last Higest Bid Price
          </p>
          <p className="text-28 md:text-36">{bidPrice} MATIC</p>
          <p className="text-12 text-green">≈ $150,000 USD</p>
        </section>
        <section className="flex-center sm:flex-center-start lg:flex-center-end">
          <BaseButton color="light" otherClass={btn}>
            <IconBid className="mr-1" width={24} height={24} />
            Make Offer (Beta)
          </BaseButton>
        </section>
      </section>
      <hr className={hr} />
      <section className="grid grid-cols-2 gap-x-12">
        <section>
          <p className="text-12 text-green">Tax rate</p>
          <p className="font-semibold">{taxRate}</p>
        </section>
        <section className={`relative ${divider}`}>
          <p className="text-12 text-green">Bidding Ends in</p>
          <p className="font-semibold">{next}</p>
        </section>
      </section>
    </section>
  )
}

export default Auction
