import type { ComponentProps } from '@type'

import clsx from 'clsx'
import isUrl from 'is-url'
import { useState } from 'react'

import ImageUploader from '@component/Uploader/Image'

import SvgChevron from '@svg/Chevron'

type Props = ComponentProps & {
  data: Record<string, any>
  content?: string
  setContent: (value: string) => void
  redirect?: string
  setRedirect: (value: string) => void
  isLocked: boolean
}

const Content = ({
  css,
  data,
  content,
  setContent,
  redirect,
  setRedirect,
  isLocked,
}: Props) => {
  const isValidRedirect = redirect === '' || (redirect && isUrl(redirect))
  const hasHint = !isValidRedirect

  const baseCss = 'cols-1 gap-y-4'
  const topCss = 'f-center-between cursor-pointer'
  const headCss = 't-16 sm:t-18 font-semibold'
  const redirectCss = 'mt-2 text-beige/60'
  const redirectInputCss = clsx('input-text mt-2 w-full', {
    'border border-red': hasHint,
  })
  const hintCss = 'mt-2 font-12 text-red text-right'

  const onChange = (event: any) => setRedirect(event.target.value)

  return (
    <section className={baseCss}>
      <div className={topCss}>
        <p className={headCss}>Update AD</p>
      </div>

      <div>
        {/* Content URI */}
        {isLocked ? (
          <div
            style={{ backgroundImage: `url(${content})` }}
            className="image-uploader"
          />
        ) : (
          <ImageUploader content={content} callback={setContent} />
        )}

        {/* Redirect URI */}
        <div className="mt-6">
          <p className="t-14">AD campaign link</p>
          {isLocked ? (
            <p className={redirectCss}>{redirect}</p>
          ) : (
            <>
              <input
                type="text"
                className={redirectInputCss}
                placeholder="Enter the URL"
                value={redirect}
                onChange={onChange}
              />
              {hasHint && !isValidRedirect && (
                <p className={hintCss}>Invalid URL</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default Content
