import { NavLink } from '@remix-run/react'
import clsx from 'clsx'

import ChevronRightSvg from '@components/Svg/ChevronRight'

import Icon from '../Icon'

type PropsType = ComponentPropsType & {
  type: 'mail' | 'paper'
  to: string
  title: string
  content: string
  inMiddle?: boolean
}

const Item = ({ children, type, to, title, content, inMiddle }: PropsType) => {
  const isMail = type === 'mail'

  const onClick = (event: React.MouseEvent) => {
    event.preventDefault()
    window.open(to, isMail ? '_self' : '_blank')
  }

  const baseCss = clsx('relative grid grid-cols-[auto_1fr] gap-x-4 f-row-cc', {
    'lg:f-row-cc': inMiddle,
    'lg:f-row-cs': !inMiddle,
  })
  const contentCss = clsx(
    'grid grid-cols-1 gap-y-2',
    '[&>div]:f-row-cs [&>div]:gap-x-1 [&>div]:text-sm [&>div]:md:text-base [&>div]:text-green-10 [&>div]:font-semibold',
    '[&>div>svg]:hidden [&>div>svg]:md:block',
    '[&>p]:text-xs [&>p]:text-gray-50 [&>p]:hidden [&>p]:md:block'
  )
  const dividerCss = clsx('absolute w-px h-full bg-gray-80 hidden lg:block')
  const leftDividerCss = clsx(dividerCss, '-left-10')
  const rightDividerCss = clsx(dividerCss, '-right-10')

  return (
    <NavLink className={baseCss} to="#" onClick={onClick}>
      {inMiddle && <div className={leftDividerCss} />}
      <Icon>{children}</Icon>
      <div className={contentCss}>
        <div>
          {title}
          <ChevronRightSvg width={16} height={16} opacity={1} />
        </div>
        <p>{content}</p>
      </div>
      {inMiddle && <div className={rightDividerCss} />}
    </NavLink>
  )
}

export default Item
