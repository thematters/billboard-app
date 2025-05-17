import clsx from 'clsx'

import Avatar from '@components/Avatar'

import Controls from './Controls'
import Detail from './Detail'
import Switch from './Switch'

const Account = () => {
  const baseCss = clsx('f-row-cb p-4 rounded-xl border border-gray-80')
  const leftCss = clsx('f-row-cs')

  return (
    <>
      <section>
        <section className={baseCss}>
          <section className={leftCss}>
            <Avatar />
            <Detail />
          </section>

          <section>
            <Controls />
          </section>
        </section>
        <Switch />
      </section>
    </>
  )
}

export default Account
