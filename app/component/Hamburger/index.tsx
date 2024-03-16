import clsx from 'clsx'

type Props = {
  isMenuActive: boolean
}

const Hamburger = ({ isMenuActive }: Props) => {
  const baseCss = clsx('h-6 w-6', 'f-center flex-col', 'cursor-pointer')
  const barCss = clsx('h-0.5 w-6', 'bg-white', 'rounded', 'trans-300')
  const barTopCss = clsx(barCss, {
    'translate-y-2 rotate-45': isMenuActive,
  })
  const barMiddleCss = clsx(barCss, 'my-1.5', {
    'opacity-0': isMenuActive,
    'opacity-100': !isMenuActive,
  })
  const barBottomCss = clsx(barCss, {
    '-translate-y-2 -rotate-45': isMenuActive,
  })

  return (
    <div className={baseCss}>
      <div className={barTopCss}></div>
      <div className={barMiddleCss}></div>
      <div className={barBottomCss}></div>
    </div>
  )
}

export default Hamburger
