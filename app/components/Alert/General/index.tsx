import type { PropsType as BasePropsType } from '../Base'

import clsx from 'clsx'

import CheckSvg from '@components/Svg/Check'

import Base from '../Base'

type PropsType = Omit<BasePropsType, 'children'> & {
  content?: string
}

const GeneralAlert = ({ content, visible, style }: PropsType) => {
  const baseCss = clsx('f-row-ss')
  const iconCss = clsx('mt-[2px]')
  const textCss = clsx('pl-2')

  return (
    <Base visible={visible} style={style}>
      <section className={baseCss}>
        <CheckSvg classes={iconCss} />
        <p className={textCss}>{content}</p>
      </section>
    </Base>
  )
}

export default GeneralAlert
