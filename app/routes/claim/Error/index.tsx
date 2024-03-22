import clsx from 'clsx'

import ButtonBase from '@component/Button/Base'
import SvgErrorClaim from '@svg/ErrorClaim'

type Props = {
  click: () => void
}

const Error = ({ click }: Props) => {
  const baseCss = clsx('lg:pb-20', 'max-limit')
  const contentCss = clsx('t-14 md:t-20', 'text-center')
  const codeCss = clsx('my-4', 't-12', 'text-gray')
  const svgCss = clsx('my-6 lg:my-10', 'mx-auto')
  const btnCss = clsx('px-28', 'mx-auto', 't-18', 'font-normal')

  return (
    <section className={baseCss}>
      <section className="section-title">OOPS! SOMETHING WENT WRONG</section>
      <section className={contentCss}>
        Unexpected error has occurred. Please try again later.
      </section>
      <SvgErrorClaim css={svgCss} />
      <ButtonBase css={btnCss} color="dim" click={click}>
        Retry
      </ButtonBase>
    </section>
  )
}

export default Error
