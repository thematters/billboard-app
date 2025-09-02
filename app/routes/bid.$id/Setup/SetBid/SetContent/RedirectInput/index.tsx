import clsx from 'clsx'

type PropsType = {
  redirect: string
  isValidRedirect: boolean
  setRedirect: (value: string) => void
}

const RedirectInput = ({
  redirect,
  isValidRedirect,
  setRedirect,
}: PropsType) => {
  const hasError = !isValidRedirect

  const titleCss = clsx('mt-8 text-sm text-white font-semibold')
  const inputCss = clsx('input-text mt-2 w-full', { error: hasError })
  const hintCss = clsx('mt-2 text-xs')
  const errorCss = clsx('mt-2 text-xs text-red-10 font-normal')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setRedirect(event.target.value)

  return (
    <>
      <h5 className={titleCss}>AD campaign link</h5>
      <input
        type="text"
        className={inputCss}
        placeholder="Enter the URL starts with https://"
        value={redirect}
        onChange={onChange}
      />
      {!hasError && <p className={hintCss}>&nbsp;</p>}
      {hasError && (
        <p className={errorCss}>Please enter a valid URL starts with https</p>
      )}
    </>
  )
}

export default RedirectInput
