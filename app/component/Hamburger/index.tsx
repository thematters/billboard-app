import clsx from 'clsx'

type Props = {
  onClick: () => void
  isMenuActive: boolean
}

const Hamburger = ({ onClick, isMenuActive }: Props) => {
  const baseCss = 'h-6 w-6 f-center flex-col cursor-pointer'
  const barCss = 'h-0.5 w-6 bg-white rounded trans-300'
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
    <div className={baseCss} onClick={onClick}>
      <div className={barTopCss}></div>
      <div className={barMiddleCss}></div>
      <div className={barBottomCss}></div>
    </div>
  )
}

export default Hamburger
