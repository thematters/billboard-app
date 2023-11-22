import type React from 'react'

interface Props {
  children: React.ReactNode
  otherClass?: string
}

const Title = ({ children, otherClass }: Props) => {
  return (
    <h1 className={`font-cyber text-24 lg:text-36 ${otherClass}`}>
      {children}
    </h1>
  )
}

export default Title
