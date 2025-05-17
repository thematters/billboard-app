import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type PropsType = ComponentPropsType & {
  color: 'gray' | 'dim-gray' | 'black'
  shape?: 'general' | 'circle'
  onClick: () => void
}

const MonoButton = ({
  children,
  classes,
  color,
  shape = 'general',
  onClick,
}: PropsType) => {
  const click = throttle(onClick, 500, { trailing: false })
  const baseCss = clsx(
    {
      'rounded-full': shape === 'circle',
      'cursor-pointer': true,
      'mono-gray-button': color === 'gray',
      'mono-dim-gray-button': color === 'dim-gray',
    },
    classes
  )
  return (
    <button className={baseCss} onClick={click}>
      {children}
    </button>
  )
}

export default MonoButton
