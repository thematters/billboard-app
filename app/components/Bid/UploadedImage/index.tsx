import clsx from 'clsx'

type PropsType = {
  classes?: string
  content: string
}

const UploadedImage = ({ classes, content }: PropsType) => {
  const baseStyle = { backgroundImage: `url(${content})` }
  const baseCss = clsx('uploader', classes)
  return <div style={baseStyle} className={baseCss} />
}

export default UploadedImage
