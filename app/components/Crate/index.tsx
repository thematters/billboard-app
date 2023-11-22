import type React from 'react'

interface Props {
  children?: React.ReactNode
  color: 'dim' | 'light'
  outerClass?: string
  outerStyles?: React.CSSProperties
  middleClass?: string
  middleStyles?: React.CSSProperties
  innerClass?: string
  innerStyles?: React.CSSProperties
  hasDots?: boolean
}

const Crate = ({
  children,
  color,
  outerClass,
  outerStyles,
  middleClass,
  middleStyles,
  innerClass,
  innerStyles,
  hasDots,
}: Props) => {
  const isDim = color === 'dim'
  const outer = ['outer', isDim ? '' : 'bg-beige text-black', outerClass].join(
    ' '
  )

  const inner = [
    'inner',
    isDim ? 'border-x-green' : '',
    hasDots ? 'dots' : '',
    innerClass,
  ].join(' ')

  return (
    <section className={outer} style={outerStyles}>
      <section className={middleClass} style={middleStyles}>
        <section className={inner} style={innerStyles}>
          {children}
        </section>
      </section>
    </section>
  )
}

export default Crate
