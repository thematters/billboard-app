import clsx from 'clsx'

type PropsType = {
  classes?: string
}

const EmptyImage = ({ classes }: PropsType) => {
  const baseCss = clsx('empty-image', classes)
  return (
    <div className={baseCss}>
      <div />
    </div>
  )
}

export default EmptyImage
