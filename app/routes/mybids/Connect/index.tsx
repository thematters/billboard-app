import clsx from 'clsx'

import GradButton from '@components/Button/Grad'
import ConnectSvg from '@components/Svg/Connect'
import useModal from '@hooks/useModal'

const Connect = () => {
  const { open } = useModal()

  const click = () => open('wallet')

  const titleCss = clsx('section-title')
  const descCss = clsx('mt-5 md:mt-10 md:w-1/2 mx-auto section-desc')
  const imageMDCss = clsx('my-10 w-full hidden md:block')
  const imageSMCss = clsx('my-8 mx-auto w-10/12 block md:hidden')
  const buttonCss = clsx('py-3 w-full md:w-[280px]')
  const buttonOuterCss = clsx('w-full md:w-fit mx-auto')

  return (
    <section>
      <h1 className={titleCss}>Bids</h1>
      <p className={descCss}>
        You'll need to connect your wallet to use the management page.
      </p>
      <ConnectSvg classes={imageMDCss} />
      <ConnectSvg classes={imageSMCss} />
      <GradButton
        classes={buttonCss}
        outerClasses={buttonOuterCss}
        color="green"
        type="button"
        onClick={click}
      >
        Connect to Continue
      </GradButton>
    </section>
  )
}

export default Connect
