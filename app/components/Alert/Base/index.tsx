import clsx from 'clsx'

export type PropsType = ComponentPropsType & {
  visible: boolean
  style?: React.CSSProperties
}

const Base = ({ children, visible, style }: PropsType) => {
  const baseCss = clsx('rounded-lg text-black')
  const baseStyle = {
    ...style,
    animation: visible
      ? 'fade-in 480ms ease-in-out'
      : 'fade-out 480ms ease-in-out forwards',
  }

  return (
    <section className={baseCss} style={baseStyle}>
      {children}
    </section>
  )
}

export default Base
