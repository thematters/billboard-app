import clsx from 'clsx'

type PropsType = ComponentPropsType & {
  isFullWidth?: boolean
}

const Box = ({ children, classes, isFullWidth }: PropsType) => {
  const baseCss = clsx(
    {
      'w-full': isFullWidth,
      'px-4 md:px-5 lg:px-8': !isFullWidth,
    },
    classes
  )
  return <section className={baseCss}>{children}</section>
}

export default Box
