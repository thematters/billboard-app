import type React from 'react'

type Props = {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  return <main>{children}</main>
}

export default Main
