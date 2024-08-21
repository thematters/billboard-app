import clsx from 'clsx'

import LinkButton from '@component/Button/Link'

import png from '@asset/bot.png'
import webp from '@asset/bot.webp'

const Mission = () => {
  const baseCss = 'mt-10 lg:mt-32 max-limit cols-1 lg:cols-5 lg:gap-10'
  const leftCss = 'col-span-1 lg:col-span-2 lg:mb-32'
  const descCss = 't-14 lg:t-20 font-normal'
  const btnsCss = 'mt-10 mb-14 f-center-start'
  const rightCss =
    'relative col-span-1 lg:col-span-3 mt-8 lg:mt-0 mb-8 lg:mb-0 f-center'
  const imgContainerCss = 'lg:absolute lg:-top-[160px] lg:z-1'

  return (
    <section className={baseCss}>
      <div className={leftCss}>
        <div className={descCss}>
          Our mission is to develop an open, privacy-preserving,
          blockchain-based billboard protocol that promotes fair profit-sharing
          and establishes a transparent, efficient, and accountable attention
          economy ecosystem.
        </div>
        <div className={btnsCss}>
          <LinkButton css="mr-6" color="dim" to="/showcase">
            SHOWCASE
          </LinkButton>
          <LinkButton color="grass" to="/claim">
            CLAIM
          </LinkButton>
        </div>
      </div>

      <div className={rightCss}>
        <div className={imgContainerCss}>
          <picture>
            <source type="image/webp" srcSet={webp} />
            <img className="md:w-[667px]" src={png} />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Mission
