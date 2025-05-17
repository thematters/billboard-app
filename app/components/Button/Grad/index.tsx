import clsx from 'clsx'
import throttle from 'lodash-es/throttle'

type PropsType = ComponentPropsType & {
  color: 'green'
  shape?: 'general' | 'circle'
  onClick: () => void
}

const GradButton = ({
  children,
  classes,
  color,
  shape = 'general',
  onClick,
}: PropsType) => {
  const click = throttle(onClick, 500, { trailing: false })
  const baseCss = clsx('cursor-pointer p-[1px]', {
    'rounded-xl': shape === 'general',
    'rounded-full': shape === 'circle',
    'grad-green-button-border': color === 'green',
  })
  const buttonCss = clsx(
    'cursor-pointer',
    {
      'rounded-xl': shape === 'general',
      'rounded-full': shape === 'circle',
      'grad-green-button': color === 'green',
    },
    classes
  )
  return (
    <div className={baseCss}>
      <button className={buttonCss} onClick={click}>
        {children}
      </button>
    </div>
  )
}

export default GradButton
