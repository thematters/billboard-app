import type { ComponentProps } from '@type'

import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { useDisconnect } from 'wagmi'

import Crate from '@component/Crate'
import useLockScroll from '@hook/useLockScroll'
import SvgCard from '@svg/Card'
import SvgLeave from '@svg/Leave'

type Props = ComponentProps & {
  isActive: boolean
  setActive: (value: boolean) => void
}

const MeMenu = ({ css, isActive, setActive }: Props) => {
  const { disconnect } = useDisconnect()

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
  const itemCss = 'p-4 w-full f-center-start cursor-pointer'

  const onDisconnect = () => {
    disconnect()
    setActive(false)
  }

  return (
    <Crate css={crateCss}>
      <Crate.Inner css={innerCss} hasDots hasXBorder hasXSpacing={false}>
        <nav className="list-none">
          <ul>
            <li className={liCss}>
              <NavLink className={itemCss} to="/mybids">
                <SvgCard css="mr-2" width={16} height={16} />
                My Bids
              </NavLink>
            </li>
            <li className={liCss}>
              <section className={itemCss} onClick={onDisconnect}>
                <SvgLeave css="mr-2" width={16} height={16} />
                Disconnect
              </section>
            </li>
          </ul>
        </nav>
      </Crate.Inner>
    </Crate>
  )
}

export default MeMenu
