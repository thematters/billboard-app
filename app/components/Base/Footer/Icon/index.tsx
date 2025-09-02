import clsx from 'clsx'

const Icon = ({ children }: ComponentPropsType) => {
  const outerCss = clsx(
    'rounded-lg grad-green-border p-px size-[34px] md:size-[46px]'
  )
  const iconCss = clsx('f-row-cc rounded-lg grad-green size-8 md:size-11')
  return (
    <div className={outerCss}>
      <div className={iconCss}>{children}</div>
    </div>
  )
}

export default Icon
