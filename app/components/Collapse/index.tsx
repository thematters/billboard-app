import clsx from 'clsx'
import { useState } from 'react'

import Toggle from './Toggle'

type PropsType = ComponentPropsType & {
  title: string
}

const Collapse = ({ children, classes, title }: PropsType) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const baseCss = clsx('border-b border-gray-80', classes)
  const titleCss = clsx(
    'py-5 f-row-cb text-base md:text-xl text-white font-semibold cursor-pointer'
  )
  const contentCss = clsx('text-gray-30')
  const textCss = clsx(
    'grid grid-cols-1 gap-y-4',
    'text-sm md:text-base font-normal overflow-y-hidden',
    'border-t border-dashed border-gray-80',
    {
      'py-5 h-auto': isOpen,
      'h-0 border-transparent': !isOpen,
    }
  )

  return (
    <section className={baseCss}>
      <div className={titleCss} onClick={toggle}>
        <p>{title}</p>
        <Toggle isOpen={isOpen} />
      </div>
      <div className={contentCss}>
        <div className={textCss}>{children}</div>
      </div>
    </section>
  )
}

export default Collapse
