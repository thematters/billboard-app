import clsx from 'clsx'
import { useAccount, useDisconnect } from 'wagmi'

import MonoButton from '@components/Button/Mono'
import CopySvg from '@components/Svg/Copy'
import LogoutSvg from '@components/Svg/Logout'
import useAlert from '@hooks/useAlert'
import useDrawer from '@hooks/useDrawer'

const Controls = () => {
  const { makeAlert } = useAlert()
  const { address } = useAccount()
  const { disconnect } = useDisconnect()
  const { close } = useDrawer()

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address || '')
    } catch (error) {
      console.log(error)
    }
  }

  const logout = () => {
    disconnect()
    close('me', makeAlert("You're disconnected"))
  }

  const baseCss = clsx('f-row-ce gap-x-2')
  const buttonCss = clsx('f-row-cc size-10 rounded-lg')

  return (
    <section className={baseCss}>
      <MonoButton classes={buttonCss} color="dim-gray" onClick={copy}>
        <CopySvg />
      </MonoButton>
      <MonoButton classes={buttonCss} color="dim-gray" onClick={logout}>
        <LogoutSvg />
      </MonoButton>
    </section>
  )
}

export default Controls
