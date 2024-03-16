import clsx from 'clsx'

type Props = {
  message: string
}

const ErrorMessage = ({ message }: Props) => {
  const errorCss = clsx('mt-5', 't-14', 'text-red/60', 'text-center')
  return (
    <section className={errorCss}>
      <p>Error Occurred:</p>
      <p>{message}</p>
    </section>
  )
}

export default ErrorMessage
