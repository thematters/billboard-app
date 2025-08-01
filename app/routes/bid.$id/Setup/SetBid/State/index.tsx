import clsx from 'clsx'

import DashSvg from '@components/Svg/Dash'

type PropsType = {
  num: number
}

const State = ({ num }: PropsType) => {
  const stateCss = clsx(
    'mt-5 md:mt-10 f-row-cc gap-x-2 text-sm text-gray-50 font-normal',
    '[&>p:nth-child(3n-2)]:text-green-30',
    {
      '[&>p:nth-child(1)]:text-green-20': num === 1,
      '[&>p:nth-child(2)]:text-white': num === 1,
      '[&>p:nth-child(4)]:text-green-20': num === 2,
      '[&>p:nth-child(5)]:text-white': num === 2,
      '[&>p:nth-child(7)]:text-green-20': num === 3,
      '[&>p:nth-child(8)]:text-white': num === 3,
    }
  )

  return (
    <section className={stateCss}>
      <p>1</p>
      <p>Price</p>
      <DashSvg />
      <p>2</p>
      <p>AD Image</p>
      <DashSvg />
      <p>3</p>
      <p>Confirm</p>
    </section>
  )
}

export default State
