import clsx from 'clsx'

const Box = ({ children, classes }: ComponentPropsType) => {
  const baseCss = clsx('px-4 md:px-5 lg:px-8', classes)
  return <section className={baseCss}>{children}</section>
}

export default Box
