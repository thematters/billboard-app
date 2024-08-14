import type { ComponentProps } from '@type'

import clsx from 'clsx'

type Props = ComponentProps & {
  message: string
}

const ErrorMessage = ({ css, message }: Props) => {
  const errorCss = clsx('t-14 mt-5 text-center text-red/60', css)
  return (
    <section className={errorCss}>
      <p>Error Occurred:</p>
      <p>{message}</p>
    </section>
  )
}

export default ErrorMessage
