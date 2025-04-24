import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type Props = ComponentPropsType & {
  onClick: () => void
}

const Base = ({ children, classes, onClick }: Props) => {
  const click = throttle(onClick, 500, { trailing: false })
  const baseCss = clsx('', classes)
  return (
    <button className={baseCss} onClick={click}>
      {children}
    </button>
  )
}

export default Base
