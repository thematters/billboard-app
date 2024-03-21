import clsx from 'clsx'

import ButtonLink from '@component/Button/Link'

import png from '@asset/bot.png'
import webp from '@asset/bot.webp'

const Mission = () => {
  const baseCss = clsx(
    'max-limit',
    'mt-10 lg:mt-32',
    'grid grid-cols-1 lg:grid-cols-5',
    'lg:gap-10'
  )
  const leftCss = clsx('col-span-1 lg:col-span-2', 'lg:mb-32')
  const descCss = clsx('t-14 lg:t-20', 'font-normal')
  const btnsCss = clsx('mt-10', 'mb-14', 'f-center-start')
  const rightCss = clsx('relative', 'col-span-1 lg:col-span-3', 'mt-8 lg:mt-0', 'mb-8 lg:mb-0', 'f-center')
  const imgContainerCss = clsx('lg:absolute', 'lg:-top-[160px]', 'lg:z-1')

  return (
    <section className={baseCss}>
      <section className={leftCss}>
        <section className={descCss}>
          Our mission is to develop an open, privacy-preserving,
          blockchain-based billboard protocol that promotes fair profit-sharing
          and establishes a transparent, efficient, and accountable attention
          economy ecosystem.
        </section>
        <section className={btnsCss}>
          <ButtonLink css="mr-6" color="dim" to="/showcase">
            SHOWCASE
          </ButtonLink>
          <ButtonLink color="grass" to="/claim">
            CLAIM
          </ButtonLink>
        </section>
      </section>

      <section className={rightCss}>
        <section className={imgContainerCss}>
          <picture>
            <source type="image/webp" srcSet={webp} />
            <img className="md:w-[667px]" src={png} />
          </picture>
        </section>
      </section>
    </section>
  )
}

export default Mission
