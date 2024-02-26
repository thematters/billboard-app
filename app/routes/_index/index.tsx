import type { ComponentProps } from '~/types'

import Hero from './Hero'
import History from './History'
import Roadmap from './Roadmap'
import What from './What'
import Work from './Work'

const Index = () => {
  return (
    <>
      <Hero />
      <What />
      <History />
      <Work />
      <Roadmap />
    </>
  )
}

export default Index
