import type { ComponentProps } from '~/types'

import About from './About'
import Hero from './Hero'
import History from './History'
import Roadmap from './Roadmap'
import Sketch from './Sketch'
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
      <About />
    </>
  )
}

export default Index
