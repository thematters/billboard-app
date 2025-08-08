import clsx from 'clsx'

type PropsType = {
  isOpen: boolean
}

const Toggle = ({ isOpen }: PropsType) => {
  const baseCss = clsx('relative f-row-cc size-4 md:size-6')
  const vCss = clsx(
    'absolute w-[2px] h-4 md:h-6 bg-green-10 trans-300',
    { 'rotate-90': isOpen },
    { 'rotate-0': !isOpen }
  )
  const hCss = clsx('absolute w-4 md:w-6 h-[2px] bg-green-10')

  return (
    <section className={baseCss}>
      <div className={vCss}></div>
      <div className={hCss}></div>
    </section>
  )
}

export default Toggle
