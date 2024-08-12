import type { ComponentProps } from '@type'

import clsx from 'clsx'

import useImageUpload from '@hook/useImageUpload'
import SvgCamera from '@svg/Camera'
import SvgSpinner from '@svg/Spinner'

type Props = ComponentProps & {
  content?: string
  callback: (value: string) => void
}

const ImageUploader = ({ css, content, callback }: Props) => {
  const { data, error, isLoading, upload } = useImageUpload({ callback })

  const baseStyle = {
    backgroundImage: `
      linear-gradient(rgba(33, 33, 33, 0.8), rgba(33, 33, 33, 0.8)),
      url(${content})
    `,
  }
  const baseCss = 'image-uploader'
  const imgCss = clsx('f-center h-full w-full', {
    'cursor-not-allowed': isLoading,
    'cursor-pointer': !isLoading,
  })

  return (
    <section style={baseStyle} className={baseCss}>
      <label className={imgCss}>
        {isLoading ? (
          <SvgSpinner css="animate-spin" width={36} height={36} />
        ) : (
          <SvgCamera />
        )}
        <input
          className="hidden"
          name="file"
          type="file"
          accept="image/png,image/jpg,image/jpeg,image/webp"
          onChange={upload}
          disabled={isLoading}
        />
      </label>
    </section>
  )
}

export default ImageUploader
