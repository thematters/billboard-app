import { useState } from 'react'

interface Props {
  isActive: boolean
}

const Hamburger = ({ isActive }: Props) => {
  const bar = [
    'w-6 h-0.5 bg-white rounded',
    'transition ease transformm duration-300',
  ].join(' ')

  return (
    <div className="w-6 h-6 flex-center flex-col cursor-pointer">
      <div
        className={`${bar} ${isActive ? 'rotate-45 translate-y-2' : ''}`}
      ></div>
      <div
        className={`${bar} my-1.5 ${isActive ? 'opacity-0' : 'opacity-100'}`}
      ></div>
      <div
        className={`${bar} ${isActive ? '-rotate-45 -translate-y-2' : ''}`}
      ></div>
    </div>
  )
}

export default Hamburger
