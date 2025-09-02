import clsx from 'clsx'

const Main = ({ children }: ComponentPropsType) => {
  const baseCss = clsx('flex-grow')

  return <main className={baseCss}>{children}</main>
}

export default Main
