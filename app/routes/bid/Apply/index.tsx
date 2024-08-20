import clsx from 'clsx'

import LinkButton from '@component/Button/Link'
import { FORM_LINK } from '@constant'

const Apply = () => {
  const baseCss = 'lg:pb-20 max-limit'
  const contentCss = 't-14 md:t-20 text-center'
  const footCss = 'mt-5 sm:mt-10 f-col-reverse sm:flex-row sm:f-center'
  const btnCss = 'mt-4 sm:mt-0 w-full sm:w-[250px] f-center t-18 font-normal'
  const btnLinkCss = 'w-full sm:w-fit'
  const btnLastLinkCss = clsx(btnLinkCss, 'sm:ml-5')

  return (
    <section className={baseCss}>
      <h1 className="section-title">APPLY FOR WHITELIST</h1>
      <p className={contentCss}>
        The Billboard auction is currently whitelisted. <br />
        If you have not yet applied, click Go Apply to submit your application.
      </p>

      <div className={footCss}>
        <LinkButton
          css={btnCss}
          linkCss={btnLinkCss}
          color="dim"
          to="/showcase"
        >
          Back
        </LinkButton>
        <LinkButton
          css={btnCss}
          linkCss={btnLastLinkCss}
          color="grass"
          to={FORM_LINK}
          target="_blank"
        >
          Go Apply
        </LinkButton>
      </div>
    </section>
  )
}

export default Apply
