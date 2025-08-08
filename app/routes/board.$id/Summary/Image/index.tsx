import clsx from 'clsx'

type PropsType = {
  board: Record<string, Anything>
}

const Image = ({ board }: PropsType) => {
  const { imageURI } = board

  const baseCss = clsx('w-full md:pr-16')
  const imageCss = clsx('w-full rounded-[20px]')

  return (
    <section className={baseCss}>
      <img className={imageCss} src={imageURI} />
    </section>
  )
}

export default Image
