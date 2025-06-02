import clsx from 'clsx'

import CopySvg from '@components/Svg/Copy'

type PropsType = {
  classes?: string
  redirect: string
}

const RedirectLink = ({ classes, redirect }: PropsType) => {
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(redirect || '')
    } catch (error) {
      console.log(error)
    }
  }

  const titleRowCss = clsx('f-row-cb', classes)
  const titleCss = clsx('text-white font-semibold')
  const linkCss = clsx(
    'mt-2 py-3 px-5 h-auto max-h-[84px] text-gray-50 bg-gray-80 rounded-lg break-all overflow-y-scroll'
  )
  return (
    <>
      <div className={titleRowCss}>
        <h5 className={titleCss}>AD campaign link</h5>
        <button onClick={copy}>
          <CopySvg width={16} height={16} />
        </button>
      </div>
      <div className={linkCss}>{redirect}</div>
    </>
  )
}

export default RedirectLink
