import clsx from 'clsx'

type PropsType = ComponentPropsType & {
  num: number
}

const Role = ({ children, classes, num }: PropsType) => {
  const baseCss = clsx(
    classes,
    'grid grid-cols-1 gap-y-5',
    '[&>h5]:text-xl [&>h5]:md:text-[28px]',
    '[&>p]:text-base [&>p]:text-gray-50'
  )
  const numCss = clsx('text-base md:text-xl text-gray-50')
  const currCss = clsx('text-green-10')

  return (
    <div className={baseCss}>
      <div className={numCss}>
        <span className={currCss}>0{num}</span> - 03
      </div>
      {children}
    </div>
  )
}

export default Role
