import type { ComponentProps } from '@type'

import clsx from 'clsx'

import { ERROR, STATE } from '@constant'
import useImageUpload from '@hook/useImageUpload'
import SvgCamera from '@svg/Camera'
import SvgSpinner from '@svg/Spinner'

type Props = ComponentProps & {
  content?: string
  callback: (value: string) => void
}

const ImageUploader = ({ css, content, callback }: Props) => {
  const { data, error, isLoading, upload } = useImageUpload({ callback })

  const isError = error || data?.state === STATE.error
  const isReachSizeLimit = isError && data?.error === ERROR.REACH_SIZE_LIMIT

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
  const limitCss = 'mt-2 t-12 text-beige/60'
  const errorCss = 'mt-2 t-12 text-red'

  return (
    <>
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
      {!isError && <p className={limitCss}>Size limit 1 MB</p>}
      {isError && isReachSizeLimit && (
        <p className={errorCss}>Reach size limit 1 MB</p>
      )}
    </>
  )
}

export default ImageUploader
