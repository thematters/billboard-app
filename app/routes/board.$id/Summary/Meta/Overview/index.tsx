import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import ExclamationSvg from '@components/Svg/Exclamation'
import EyeSvg from '@components/Svg/Eye'
import LocationSvg from '@components/Svg/Location'
import LinkSvg from '@components/Svg/Link'
import OptimismSvg from '@components/Svg/Optimism'
import RateSvg from '@components/Svg/Rate'
import useAppEnv from '@hooks/useAppEnv'
import { formatAddress, formatURL } from '@utils/format'
import { toPercentTaxRate } from '@utils/num'

type PropsType = {
  data: Record<string, Anything>
}

const Overview = ({ data }: PropsType) => {
  const { addressOperator, urlContract } = useAppEnv()
  const { board } = data

  const address = formatAddress(addressOperator)
  const location = formatURL(board.location)
  const taxRate = toPercentTaxRate(board.taxRate || 0)

  const baseCss = clsx(
    'pt-2 f-col text-sm text-gray-30',
    '[&>div]:py-3 [&>div]:f-row-cs [&>div]:gap-x-2',
    '[&>div>span]:text-white [&>div>span]:font-semibold',
    '[&>div>a]:f-row-cs [&>div>a]:gap-x-1 [&>div>a]:text-white [&>div>a]:font-semibold'
  )
  const iconCss = clsx('text-green-10')

  return (
    <section className={baseCss}>
      <div>
        <OptimismSvg />
        Optimism
      </div>
      <div>
        <EyeSvg />
        Contract (ERC-721)
        <NavLink to={urlContract} target="_blank">
          {address}
          <LinkSvg />
        </NavLink>
      </div>
      <div>
        <ExclamationSvg classes={iconCss} />
        Token ID
        <span>{board.id}</span>
      </div>
      <div>
        <RateSvg />
        Tax Rate
        <span>{taxRate} %</span>
      </div>
      <div>
        <LocationSvg />
        Location
        <NavLink to={board.location} target="_blank">
          {location}
          <LinkSvg />
        </NavLink>
      </div>
    </section>
  )
}

export default Overview
