import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type PropsType = ComponentPropsType & {
  color: 'gray' | 'green' | 'none'
  onClick: () => void
}

const BaseButton = ({ children, classes, color, onClick }: PropsType) => {
  const click = throttle(onClick, 500, { trailing: false })
  const baseCss = clsx(
    {
      'cursor-pointer': true,
      'hover-gray-button': color === 'gray',
      'hover-green-button': color === 'green',
    },
    classes
  )
  return (
    <button className={baseCss} onClick={click}>
      {children}
    </button>
  )
}

export default BaseButton
