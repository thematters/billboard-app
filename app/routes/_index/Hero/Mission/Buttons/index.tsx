import LinkButton from '@component/Button/Link'

const MissionButtons = () => {
  const baseCss = 'mt-10 sm:mb-14 sm:f-center-start'
  const bidBtnCss = 'block w-full mr-0 sm:mr-6 sm:w-auto'
  const rewardBtnCss = 'block w-full mt-4 sm:mt-0 sm:w-auto'

  return (
    <div className={baseCss}>
      <LinkButton
        linkCss="w-full sm:w-fit"
        css={bidBtnCss}
        color="grass"
        to="/showcase"
      >
        BID ADS
      </LinkButton>
      <LinkButton
        linkCss="w-full sm:w-fit"
        css={rewardBtnCss}
        color="dim"
        to="/claim"
      >
        GET CREATOR REWARDS
      </LinkButton>
    </div>
  )
}

export default MissionButtons
