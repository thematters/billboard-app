import type React from 'react'

interface Props {
  children: React.ReactNode
  color: 'dim' | 'light'
  otherClass?: string
  click?: () => void
}

const BaseButton: React.FC<Props> = ({
  children,
  color,
  otherClass,
  click,
}) => {
  const basis = [
    'btn-basis',
    color === 'light' ? 'btn-light' : 'btn-dim',
    otherClass,
  ].join(' ')

  return (
    <button className={basis} onClick={click}>
      {children}
    </button>
  )
}

export default BaseButton
