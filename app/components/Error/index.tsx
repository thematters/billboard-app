import clsx from 'clsx'

type PropsType = {
  classes?: string
  message: string
  align?: 'center' | 'left'
}

const Error = ({ classes, message, align = 'center' }: PropsType) => {
  const baseCss = clsx(
    'text-red-10 text-xs pt-4',
    {
      'text-center': align === 'center',
      'text-left': align === 'left',
    },
    classes
  )

  return (
    <section className={baseCss}>
      <p>Error: {message}</p>
    </section>
  )
}

export default Error
