import clsx from 'clsx'

import Crate from '@component/Crate'

import Auctions from './Auctions'
import Board from './Board'
import Funds from './Funds'

const Showcase = () => {
  return (
    <>
      <Board />
      <Auctions />
      <Funds />
    </>
  )
}

export default Showcase
