import clsx from 'clsx'

import CameraSvg from '@components/Svg/Camera'
import SpinnerSvg from '@components/Svg/Spinner'
import { DATA_STATE, ERROR } from '@constants'
import useUpload from '@hooks/useUpload'

type PropsType = {
  classes: string
  content: string
  setContent: (value: string) => void
}

const Uploader = ({ classes, content, setContent }: PropsType) => {
  const { data, error, isLoading, upload } = useUpload(setContent)
  const isError = error || data?.state === DATA_STATE.error
  const isReachSizeLimit = isError && data?.error === ERROR.REACH_SIZE_LIMIT
  const isUnknown = isError && !isReachSizeLimit

  const uploaderStyle = content
    ? {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${content})`,
      }
    : {}
  const uploaderCss = clsx('uploader', { 'bg-gray-80': !content }, classes)
  const imageCss = clsx('f-row-cc h-full w-full', {
    'cursor-not-allowed': isLoading,
    'cursor-pointer': !isLoading,
  })
  const inputCss = clsx('hidden')
  const guideCss = clsx('mt-2 text-xs text-gray-70')
  const errorCss = clsx('mt-2 text-xs text-red-10 font-normal')

  return (
    <>
      <div style={uploaderStyle} className={uploaderCss}>
        <label className={imageCss}>
          {isLoading ? <SpinnerSvg width={48} height={48} /> : <CameraSvg />}
          <input
            className={inputCss}
            name="file"
            type="file"
            accept="image/png,image/jpg,image/jpeg,image/webp"
            onChange={upload}
            disabled={isLoading}
          />
        </label>
      </div>
      {!isError && (
        <p className={guideCss}>
          Recommended size 528 x 296 px. We supports JPEG, GIF, PNG, and WEBP
          file formats. Maximum file size for profile photos is 1MB.
        </p>
      )}
      {isError && (
        <>
          {isReachSizeLimit && <p className={errorCss}>Reach size limit 1MB</p>}
          {isUnknown && <p className={errorCss}>{data.error || data.code}</p>}
        </>
      )}
    </>
  )
}

export default Uploader
