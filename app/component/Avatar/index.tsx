import type { ComponentProps } from '@type'

import { FloatingFocusManager } from '@floating-ui/react'
import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import { isAddress } from 'viem'
import { useAccount, useDisconnect } from 'wagmi'

import useDropdown from '@hook/useDropdown'
import SvgAvatar from '@svg/Avatar'
import SvgCard from '@svg/Card'
import SvgCross from '@svg/Cross'
import SvgLeave from '@svg/Leave'
import { publish } from '@util/event'

type Props = ComponentProps & {
  menuClick: () => void
  isMenuActive: boolean
}

const Avatar = ({ menuClick, isMenuActive }: Props) => {
  const dropdown = useDropdown()
  const { address, isConnected } = useAccount()
  const { disconnect: walletDisconnect } = useDisconnect()
  const isEstablished = isAddress(address || '') && isConnected
  const isLarge = useMediaQuery('(min-width: 1104px)')

  const disconnect = () => {
    walletDisconnect()
    dropdown.state.setIsOpen(false)
  }

  const open = () => publish('wallet-open', {})

  const btnMenuProps = () => {
    if (!isEstablished) {
      return { onClick: open }
    }
    if (!isLarge) {
      return { onClick: menuClick }
    }
  }

  const btnDropdownProps = () => {
    if (!isEstablished) {
      return { onClick: open }
    }
    return dropdown.props.getReferenceProps()
  }

  useEffect(() => {
    if (!isLarge && dropdown.state.isOpen) {
      dropdown.state.setIsOpen(false)
    }
  }, [dropdown.state.isOpen, isLarge])

  const btnCss = clsx('btn-base p-1 sm:p-2', {
    'btn-grass': isEstablished,
    'btn-dim': !isEstablished,
  })

  const dropdownCss = 'p-2 w-[216px] border border-grass rounded-2xl bg-black'
  const liCss = 't-18 hover:bg-oak rounded-lg'
  const itemCss = 'px-4 py-3 w-full f-center-start cursor-pointer'

  return (
    <>
      <button
        ref={dropdown.refs.setReference}
        className={btnCss}
        {...(isLarge ? btnDropdownProps() : btnMenuProps())}
      >
        {isMenuActive === true ? <SvgCross css="rotate-45" /> : <SvgAvatar />}
      </button>

      {dropdown.state.isOpen && (
        <FloatingFocusManager context={dropdown.context}>
          <section
            ref={dropdown.refs.setFloating}
            style={dropdown.styles}
            {...dropdown.props.getFloatingProps()}
          >
            <nav className={dropdownCss}>
              <ul>
                <li className={liCss}>
                  <NavLink
                    className={itemCss}
                    to="/mybids"
                    onClick={() => dropdown.state.setIsOpen(false)}
                  >
                    <SvgCard css="mr-2" width={18} height={18} />
                    My Bids
                  </NavLink>
                </li>
                <li className={liCss}>
                  <section className={itemCss} onClick={disconnect}>
                    <SvgLeave css="mr-2" width={18} height={18} />
                    Disconnect
                  </section>
                </li>
              </ul>
            </nav>
          </section>
        </FloatingFocusManager>
      )}
    </>
  )
}

export default Avatar
