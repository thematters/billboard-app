import clsx from 'clsx'

import LinkButton from '~/components/Buttons/Link'

import png from '~/assets/bot.png'
import webp from '~/assets/bot.webp'

const Mission = () => {
  const css = clsx(
    'max-limit',
    'mt-10 lg:mt-32',
    'grid grid-cols-1 lg:grid-cols-2 lg:gap-10'
  )

  const descCss = clsx('t-14 lg:t-20', 'font-normal')

  const btnsCss = clsx('mt-10', 'mb-14', 'f-center-start')

  const rightCss = clsx('relative', 'mt-8 lg:mt-0', 'mb-8 lg:mb-0', 'f-center')

  const imgContainerCss = clsx('lg:absolute', 'lg:-top-[160px]', 'lg:z-1')

  return (
    <section className={css}>
      <section className="lg:mb-10">
        <section className={descCss}>
          Our mission is to develop an open, privacy-preserving,
          blockchain-based billboard protocol that promotes fair profit-sharing
          and establishes a transparent, efficient, and accountable attention
          economy ecosystem.
        </section>
        <section className={btnsCss}>
          <LinkButton customCss="mr-6" color="dim" to="/showcase">
            SHOWCASE
          </LinkButton>
          <LinkButton color="grass" to="/claim">
            CLAIM
          </LinkButton>
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
