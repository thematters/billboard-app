import { NavLink } from '@remix-run/react'

type Props = {
  data: Record<string, any>
}

const Record = ({ data }: Props) => {
  const baseCss =
    'p-4 md:p-5 bg-black b-b-dashed cols-1 md:cols-8 gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0'
  const leftCss = 'font-normal col-span-7'
  const roundCss = 't-12 opacity-60'
  const linkCss = 'mt-1 t-14 one-line'
  const rightCss = 'pr-3'
  const amountHeadCss = 't-12 font-normal opacity-60'
  const amountCss = 'mt-1 t-14 font-medium'
  const amountUnitCss = 't-12 font-normal'

  return (
    <section className={baseCss}>
      <div className={leftCss}>
        <div className={roundCss}>
          {data.from} - {data.to} · No. {data.roundId}
        </div>
        <div className={linkCss}>
          <NavLink className="hover:text-grass" to={data.url} target="_blank">
            {data.title}
          </NavLink>
        </div>
      </div>
      <div className={rightCss}>
        <div className={amountHeadCss}>Amount</div>
        <div className={amountCss}>
          {data.amount.toFixed(6)}
          <span className={amountUnitCss}> USDT</span>
        </div>
      </div>
    </section>
  )
}

export default Record
