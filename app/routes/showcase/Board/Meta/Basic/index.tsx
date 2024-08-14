import { NavLink } from '@remix-run/react'
import clsx from 'clsx'
import { useState } from 'react'

import useEnvs from '@hook/useEnvs'
import SvgChevron from '@svg/Chevron'
import SvgLink from '@svg/Link'
import { formatAddress } from '@util/format'
import { toPercentTaxRate } from '@util/num'

type Props = {
  board: Record<string, any>
}

const Basic = ({ board }: Props) => {
  const envs = useEnvs()
  const [isOpen, setIsOpen] = useState(false)
  const { imageURI, name, location, taxRate: rawTaxRate } = board

  const address = formatAddress(envs.addressOperator)
  const taxRate = toPercentTaxRate(Number(rawTaxRate || 0))

  const baseCss = 'cols-1 gap-y-4'
  const imgCss = 'w-full aspect-img rounded-2xl border border-green'
  const headCss = 'f-center-between cursor-pointer'
  const btnCss = clsx('trans-300', {
    '-rotate-90': isOpen,
    'rotate-90': !isOpen,
  })
  const detailCss = clsx('t-14 pt-1 text-beige/60', {
    block: isOpen,
    hidden: !isOpen,
  })
  const itemCss = 'py-4 w-full f-center-between b-b-dashed border-green/40'
  const lastCss = clsx(itemCss, 'border-b-0')
  const linkCss = 'f-center-between hover:text-grass trans-300'

  return (
    <section className={baseCss}>
      {/* image */}
      <img className={imgCss} src={imageURI} />

      {/* contract details */}
      <div>
        <div className={headCss} onClick={() => setIsOpen(!isOpen)}>
          <p>Board Details</p>
          <SvgChevron css={btnCss} width="16" height="16" />
        </div>

        <div className={detailCss}>
          <div className={itemCss}>
            <p>Contract (ERC-721)</p>
            <NavLink className={linkCss} to={envs.urlContract} target="_blank">
              {address}
              <SvgLink css="ml-1" width={16} height={16} />
            </NavLink>
          </div>
          <div className={itemCss}>
            <p>Token ID</p>
            <p>{envs.tokenIdShowCase}</p>
          </div>
          <div className={itemCss}>
            <p>Chain</p>
            <p>Optimism</p>
          </div>
          <div className={lastCss}>
            <p>Board Tax Rate</p>
            <p>{taxRate} %</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Basic
