import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { useDisconnect } from 'wagmi'

import Crate from '@component/Crate'
import useLockScroll from '@hook/useLockScroll'

type Props = ComponentProps & {
  isActive: boolean
  setActive: (value: boolean) => void
}

const MeMenu = ({ css, isActive, setActive }: Props) => {
  const { disconnect: walletDisconnect } = useDisconnect()

  useLockScroll(isActive)

  const crateCss = clsx('lg:hidden', 'menu', {
    'menu-active': isActive,
    'menu-inactive': !isActive,
  })
  const innerCss = clsx({
    'menu-active': isActive,
    'menu-inactive': !isActive,
  })
  const liCss = 't-14 b-b-green text-white hover:text-grass'
  const itemCss = 'p-4 w-full f-center-between cursor-pointer'

  const disconnect = () => {
    walletDisconnect()
    setActive(false)
  }

  return (
    <Crate css={crateCss}>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasXSpacing={false}>
        <nav className="list-none">
          <ul>
            <li className={liCss}>
              <NavLink className={itemCss} to="/bids">
                MY BIDS
              </NavLink>
            </li>
            <li className={liCss}>
              <section className={itemCss} onClick={disconnect}>
                DISCONNECT
              </section>
            </li>
          </ul>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default MeMenu
