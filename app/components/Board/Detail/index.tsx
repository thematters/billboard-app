import type React from 'react'

import { NavLink } from '@remix-run/react'

import IconCopy from '~/components/Icons/Copy'
import IconExclamation from '~/components/Icons/Exclamation'
import IconRedirectLink from '~/components/Icons/RedirectLink'

interface Props {
  contract: string
  location: string
  tokenId: string
  tokenURI: string
}

const Detail = ({ contract, location, tokenId, tokenURI }: Props) => {
  const head = [
    'p-4 bg-green flex-center-start',
    'border-all-green rounded-t-[20px]',
    'text-black font-semibold',
  ].join(' ')

  const row = [
    'p-4 bg-dim-black border-x-green border-b-green',
    'flex-center-between text-14',
  ].join(' ')

  return (
    <section className="w-full">
      {/* Head */}
      <section className={head}>
        <IconExclamation className="mr-1" width={14} height={14} />
        Detail
      </section>

      {/* Rows */}
      <section className={row}>
        <span>Board Location</span>
        <NavLink className="flex-center-end" to="">
          {location}
          <IconRedirectLink className="ml-1" width={16} height={16} />
        </NavLink>
      </section>

      <section className={row}>
        <span>Token Standard</span>
        <span>ERC-721</span>
      </section>

      <section className={row}>
        <span>Token ID</span>
        <span>{tokenId}</span>
      </section>

      <section className={row}>
        <span>Chain</span>
        <span>Ethereum</span>
      </section>

      <section className={row}>
        <span>Content URI</span>
        <NavLink className="flex-center-end" to="">
          {tokenURI}
          <IconCopy className="ml-1" width={20} height={20} />
        </NavLink>
      </section>

      <section className={`${row} rounded-b-[20px]`}>
        <span>Contract Link</span>
        <NavLink className="flex-center-end" to="">
          {contract}
          <IconRedirectLink className="ml-1" width={16} height={16} />
        </NavLink>
      </section>
    </section>
  )
}

export default Detail
